<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './views/todoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>
