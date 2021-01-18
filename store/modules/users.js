import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        state: {
            users: []
        },
        getters: {
            users: state => {
                return state.users;
            }
        },
        mutations: {
            SET_USERS: (state, payload) => {
                state.users = payload
            },
            NEW_USER: (state, payload) => {
                console.log('----- payload',payload)
                state.users.push(payload)
            },
        },
        actions: {
            getAllUsers: async (context) => {
                let { data } = await Axios.get('http://localhost:3000/user/find')
                console.log('tanid irsen ',data);
                context.commit('SET_USERS', data)
            },
            addUser: async (context,userData) => {
                console.log('servert irsen data',userData)
                let {email,password,role}=userData;
                let { data } = await Axios.post(`http://localhost:3000/user/newUser`,{userData})
                context.commit('NEW_USER', data)
            }
        },
    });
};

export default store