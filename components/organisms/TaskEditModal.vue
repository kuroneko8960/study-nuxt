<template>
  <Modal class="task-edit-modal" :is-show="isShow">
    <ModalHead> タスクの追加 </ModalHead>
    <ModalBody>
      <TextField placeholder="タスクを入力" full-width />
    </ModalBody>
    <ModalAction>
      <ActionButton @action="emitCancel">キャンセル</ActionButton>
      <ActionButton variant="primary">確定</ActionButton>
    </ModalAction>
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class TaskEditModal extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly isShow!: boolean

  emitCancel() {
    this.$emit('cancel')
  }
}
</script>
