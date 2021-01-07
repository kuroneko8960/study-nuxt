<template>
  <Modal class="task-edit-modal" :is-show="isShow">
    <ModalHead> タスクの追加 </ModalHead>
    <ModalBody>
      <TextField
        ref="textFieldContent"
        v-model="content"
        placeholder="タスクを入力"
        full-width
        @enter="emitCommit"
      />
    </ModalBody>
    <ModalAction>
      <ActionButton @action="emitCancel">キャンセル</ActionButton>
      <ActionButton
        variant="primary"
        :disabled="!isValidated"
        @action="emitCommit"
      >
        確定
      </ActionButton>
    </ModalAction>
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Ref, Watch } from 'nuxt-property-decorator'
import TextField from '../atoms/TextField.vue'

@Component
export default class TaskEditModal extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly isShow!: boolean

  content: string = ''

  @Ref('textFieldContent')
  refTextFieldContent!: TextField

  get isValidated() {
    return this.content
  }

  emitCommit() {
    if (this.isValidated) {
      this.$emit('commit', this.content)
      this.content = ''
    }
  }

  emitCancel() {
    this.$emit('cancel')
    this.content = ''
  }

  @Watch('isShow')
  onChangeIsShow(val: boolean) {
    if (val) {
      this.refTextFieldContent.focus()
    }
  }
}
</script>
