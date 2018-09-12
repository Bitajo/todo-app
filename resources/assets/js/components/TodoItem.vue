<template>
    <tr>
        <td class="is-fullwidth" style="cursor: pointer" :class="{ 'is-done': done }" @click="toggleDone()"> <!-- -->
            {{ text }}
        </td>
        <td class="is-narrow">
            <a class="button is-danger is-small" @click="removeTodo()">Eliminar</a> <!-- @click="clickRemoveTodo(todo)"-->
        </td>
    </tr>
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
        props: {
            text: String, 
            done: Boolean, 
            id: Number
        },
        methods: {
            removeTodo () {
                this.$emit('delete', this.id);
            },
            toggleDone () {
                this.$emit('toggle', this.$props);          
            }
        }
    }
</script>

<style>
    .is-done {
        text-decoration: line-through;
    }
</style>
