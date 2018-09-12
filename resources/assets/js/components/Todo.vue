<template>
    <div class="container">
        <todo-input @new="addTodo"></todo-input>
      
        <table class="table is-bordered">
            <todo-item 
                v-for="(todo, index) in items" 
                :key="index" 
                :id="todo.id"
                :text="todo.text" 
                :done="todo.done"
                @delete="removeTodo" 
                @toggle="toggleDone">
            </todo-item>
        </table>
        
    </div>
</template>

<script>
    /**
     * Tips:
     * - En mounted pueden obtener el listado del backend de todos y dentro de la promesa de axios asirnarlo
     *   al arreglo que debe tener una estructura similar a los datos de ejemplo.
     * - En addTodo, removeTodo y toggleTodo deben hacer los cambios pertinentes para que las modificaciones,
     *   addiciones o elimicaiones tomen efecto en el backend asi como la base de datos.
     */

import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

    export default {
        components: {
            TodoInput,
            TodoItem
        },
        data () {
            return {
                items: [],
            }
        },
        mounted () {
           this.listTodo();
        },
        methods: {
            listTodo(){
                let list = this;
                axios.get('/api/todos').then(function (response) {
                    list.items = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            addTodo(text){
                let me = this;

                axios.post('/api/todos', {
                        text: text,
                        done: false
                    })
                    .then(function (response) {
                        me.listTodo();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            removeTodo(id){
                let me = this;

                axios.delete('/api/todos/'+ id)
                .then(function (response) {
                     me.listTodo();
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            toggleDone: function(todo){
                let me = this;

                axios.put('/api/todos/'+ todo.id, {
                    done: !todo.done
                })
                .then(function (response) {
                     me.listTodo();
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>

<style>
    .is-done {
        text-decoration: line-through;
    }
</style>
