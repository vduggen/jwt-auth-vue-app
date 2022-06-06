import AuthService from '../services/auth.service';
import StorageService from '../services/storage.service';

const user = StorageService.get('user', true);

export const auth = {
    namespaced: true,
    state: {
        status: {
            loggedIn: user ? true : false
        },
        user: user ? user : null
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    },
    actions: {
        async login({ commit }, user) {
          try {
            const response = await AuthService.login(user);
    
            commit('loginSuccess', response);
            return Promise.resolve(response);
          } catch (error) {
            commit('loginFailure');
            return Promise.reject(error);
          }
        },
    
        logout({ commit }) {
          AuthService.logout();
          commit('logout');
        },
    
        async register({ commit }, user) {
            try {
                const { data } = await AuthService.register(user);

                commit('registerSuccess');
                return Promise.resolve(data);
            } catch(error) {
                commit('registerFailure');
                return Promise.reject(error);
            }
        }
    },
    getters: {
        getLoggedIn: (state) => state.status.loggedIn,
        getUser: (state) => state.user
    },
};