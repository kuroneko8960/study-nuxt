<template>
  <div class="task">
    <div class="task__content">
      <Checkbox :label="task.content" :checked="task.isCompleted" is-clear />
    </div>
    <div class="task__actions">
      <IconButton icon="edit" />
      <IconButton icon="delete" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { TaskRecord } from '~/store/tasks'

@Component
export default class Task extends Vue {
  @Prop({ type: Object })
  readonly task!: TaskRecord
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: row;
  border: 1px solid #9e9e9e;
  padding: 1rem;
  box-shadow: 1px 3px 3px rgba(#000000, 0.12);

  &__content {
    flex-grow: 1;
  }

  &__action {
    flex-shrink: 0;
  }
}
</style>
