<template>
  <div class="todo-item bg-white shadow-md rounded-md p-4 mb-4">
    <h3 class="text-xl font-bold">{{ todo.title }}</h3>
    <p class="text-gray-600">{{ todo.description }}</p>
    <p class="text-sm mt-2">
      Status: <span :class="{'text-green-500': todo.is_completed, 'text-red-500': !todo.is_completed}">
        {{ todo.is_completed ? 'Completed' : 'Not Completed' }}
      </span>
    </p>
    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-md"
      @click="$emit('delete-todo', todo.id)">
      Delete
    </button>
    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md ms-2"
      @click="$emit('complete-todo', todo.id)">
      Complete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  }
}
</script>

<style scoped>
.todo-item {
  .todo-item {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px 0;
  }
}
</style>
  