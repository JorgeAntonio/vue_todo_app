<script setup>
import { store, removeTodo, toggleTodoStatus } from "../store/TodoStore";
import TodoItem from "../components/TodoItem.vue";

const todos = store.todoList;
</script>

<template>
    <div class="space-y-2">
        <div v-for="(todo, index) in todos" :key="index">
            <TodoItem :todo="todo" :removeTodo="() => removeTodo(todo)" :toggleTodoStatus="toggleTodoStatus" />
        </div>
    </div>
</template>

<style>
.completed {
    text-decoration: line-through;
}
</style>
