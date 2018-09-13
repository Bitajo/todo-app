import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const todoStore = new Vuex.Store({
    state:{
        items: [],
    },
    getters:{
        items(state){
            return state.items;
        }
    },
    mutations:{
        LIST_TODO(state, items){
            state.items = items;
        },
        /*ADD_TODO(state, todo){
            state.items.unshift(todo);
        },
        TOGGLE_DONE(state, todo){
            let item = state.items.find(todo =>todo.id === todo);
            item.done =!item.done;
        },
        REMOVE_TODO(state, id){
            state.items.findIndex(todo =>id === id);
        }*/
    },
    actions: {
        listTodo(context){
            axios.get('/api/todos').then(response =>{
                context.commit('LIST_TODO', response.data);
            },(err) => {
                console.log(err)
              });
        },
        addTodo(context, state){
            if (!state) {
                return
            }

            const todo = {
                text: state,
                done: false,
            }

            axios.post('/api/todos', todo)
            .then( (response) => {
                //context.commit('ADD_TODO', response.data);        
            });
         
        },
        toggleDone: (context, todo) => {
            axios.put('/api/todos/'+ todo.id, {
                done: !todo.done
            })
            .then(function (response) {
                //context.commit("TOGGLE_DONE", response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
            
        },
        removeTodo: (context, id) => {
            axios.delete('/api/todos/'+ id)
                .then(function (response) {
                    //context.commit("REMOVE_TODO", response.data.id)
                })
                .catch(function (error) {
                    console.log(error);
                });    
        }
    },
});