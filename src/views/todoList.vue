<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Todo List</h1>
    <form @submit.prevent="addTodo" class="flex mb-4">
      <input v-model="newTodo.title" placeholder="Title" required class="p-2 border border-gray-300 rounded mr-2">
      <input v-model="newTodo.description" placeholder="Description" class="p-2 border border-gray-300 rounded mr-2">
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Add Todo</button>
    </form>
    <div v-if="todos.length > 0" v-for="todo in todos" :key="todo.id" class="mb-2">
      <TodoItem :todo="todo" @delete-todo="removeTodo(todo.id)" @complete-todo="completeTodo(todo)"/>
    </div>
    <p v-else>No todos found.</p>
  </div>
</template>
  
<script>
import { getTodos, createTodo, deleteTodo, updateTodo } from '../services/todoService';
import TodoItem from '../components/todoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [],
      newTodo: {
        title: '',
        description: ''
      }
    };
  },
  async created() {
    this.todos = (await getTodos()).data.details;
  },
  methods: {
    async addTodo() {
      const response = await createTodo(this.newTodo);
      this.newTodo = { title: '', description: '' };
      this.todos = (await getTodos()).data.details;
    },
    async removeTodo(id) {
      await deleteTodo(id);
      this.todos = (await getTodos()).data.details;
    },
    async completeTodo(todo) {
      const data = {
        title: todo.title,
        description: todo.description,
        is_completed: true
      };
      await updateTodo(todo.id, data);
      this.todos = (await getTodos()).data.details;
    }
  }
};
</script>
  