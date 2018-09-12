<template>
    <div class="box">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Nuevo recordatorio" v-model="todoItemText">
            </p>
            <p class="control">
                <a class="button is-info" @click="addTodo()">
                    Agregar
                </a>
            </p>
        </div>
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
    export default {
        data () {
            return {
                todoItemText: '',
            }
        },
        mounted () {
           //this.listTodo();
        },
        methods: {
            addTodo () {
                let me = this;
                let text = me.todoItemText.trim();

                if (text !== '') {
                    me.$emit('new', me.todoItemText);
                    me.todoItemText = '';
                }
                
            }
        }
    }
</script>

<style>
    .is-done {
        text-decoration: line-through;
    }
</style>
