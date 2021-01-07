<template>
  <ul class="task-list">
    <li v-for="task in tasks" :key="task.id" class="task-list__item">
      <Task :task="task" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { TaskRecord } from '~/store/tasks'

@Component
export default class TaskList extends Vue {
  @Prop({ type: Array })
  readonly tasks!: TaskRecord[]
}
</script>

<style lang="scss" scoped>
.task-list {
  display: block;
  margin: -1em 0;
  overflow: hidden;

  &__item {
    margin: 1em 0;
  }
}
</style>
