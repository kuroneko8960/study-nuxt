<template>
  <div class="index-page">
    <div class="index-page__header">
      <h1>タスク一覧</h1>
    </div>
    <div class="index-page__body">
      <TaskListView :tasks="$store.state.tasks.list" />
    </div>
    <div class="index-page__action">
      <IconButton icon="add" variant="circle" @action="newTask" />
    </div>
    <TaskEditModal :is-show="isOpenModal" @cancel="closeModal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  isOpenModal = false

  newTask() {
    this.isOpenModal = true
  }

  closeModal() {
    this.isOpenModal = false
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  margin: 1rem 0;

  &__header {
    h1 {
      font-size: 1.25em;
      line-height: 1.5;
      border-bottom: 1px solid #009688;
    }

    margin-bottom: 1rem;
  }

  &__action {
    position: fixed;
    z-index: 100;
    bottom: 2rem;
    right: 2rem;
  }
}
</style>
