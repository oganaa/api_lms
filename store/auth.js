export const state = () => ({
    user: null
  })
export const actions = {
    login({commit},loginData){
        return this.$axios.$post("http://localhost:3000/api/user/login",loginData).then(user=>{
            commit('setAuthUser',user);
        })
        .catch(error=>{
            return Promise.reject(error);
        })
    }
}

export const mutations = {
    setAuthUser(state,user){
        state.user=user;
    }
}