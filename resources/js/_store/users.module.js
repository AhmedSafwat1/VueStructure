import { userService } from '../_services';

export const users = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            console.log("welcom get all ")
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => {console.log(users);commit('getAllSuccess', users.data.data)},
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            console.log(users);
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}