<template>
  <ul class="task-list">
    <li v-for="i in 10" :key="i">
      <Task :content="`Task ${i}`" />
    </li>
  </ul>
</template>
