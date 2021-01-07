<template>
  <div class="task">
    <div class="task__content">
      <template v-if="isEdit">
        <TextField v-model="editContent" full-width @enter="applyEdit" />
      </template>
      <template v-else>
        <Checkbox
          :label="task.content"
          :checked="task.isCompleted"
          is-clear
          @change="toggleTask"
        />
      </template>
    </div>
    <div class="task__actions">
      <template v-if="isEdit">
        <IconButton icon="close" @action="cancelEdit" />
      </template>
      <template v-else>
        <IconButton icon="edit" @action="beginEdit" />
        <IconButton icon="delete" @action="deleteTask" />
      </template>
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

  isEdit = false

  editContent = ''

  toggleTask(isCompleted: boolean) {
    this.$store.commit('tasks/updateTask', { id: this.task.id, isCompleted })
  }

  deleteTask() {
    this.$store.commit('tasks/deleteTask', this.task.id)
  }

  beginEdit() {
    this.editContent = this.task.content
    this.isEdit = true
  }

  cancelEdit() {
    this.isEdit = false
  }

  applyEdit(value: string) {
    this.$store.commit('tasks/updateTask', { id: this.task.id, content: value })
    this.isEdit = false
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: row;
  border: 1px solid #9e9e9e;
  padding: 1rem;
  box-shadow: 1px 3px 3px rgba(#000000, 0.12);
  align-items: center;

  &__content {
    flex-grow: 1;
  }

  &__action {
    flex-shrink: 0;
  }
}
</style>
