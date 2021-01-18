import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        // state: {
        //     users: []
        // },
        // getters: {
        //     users: state => {
        //         return state.users;
        //     }
        // },
        // setters: {
        //     users: (state, payload) => {
        //         state.users = payload
        //     }
        // },
        // mutations: {
        //     setUsers: (state, payload) => {
        //         state.users = payload
        //     },
        // },
        // actions: {
        //     getAllUsers: async (context) => {
        //         let { data } = await Axios.get('http://localhost:3000/api/user')
        //         // will trigger mutations -> setUsers
        //         context.commit('setUsers', data)
        //     }
        // },
        modules: {
            user: {
                namespaced: true,
                state: {
                    users: []
                },
                getters: {
                    users: state => {
                        return state.users;
                    }
                },
                mutations: {
                    setUsers: (state, payload) => {
                        state.users = payload
                    },
                    NEW_USER: (state, payload) => {
                        console.log('----- payload',payload)
                        state.users.push(payload)
                    },
                },
                actions: {
                    getAllUsers: async (context) => {
                        let { data } = await Axios.get('http://localhost:3000/api/user/find')
                        // will trigger mutations -> setUsers
                        context.commit('setUsers', data)
                    },
                    async addUser ({commit},userData)  {
                        console.log('server luu shideh data',userData)
                        let {email,password,role}=userData;
                        
                        let response= await Axios.post('http://localhost:3000/api/user/newUser',{email:email,password:password,role:role})
                        console.log("---serverluu ",response.data);
                        commit('NEW_USER', response.data)
                    },
                    async deleteUser ({commit},userData)  {
                        console.log('server luu shideh data',userData)
                        let {email,password,role}=userData;
                        
                        let response= await Axios.post(`http://localhost:3000/api/user/deleteUser/:${id}`)
                        console.log("---serverluu ",response.data);
                        commit('NEW_USER', response.data)
                    }
                },
            }
        }
    });
};
export default store