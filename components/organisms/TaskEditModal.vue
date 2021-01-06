<template>
  <Modal class="task-edit-modal">
    <ModalHead> タスクの追加 </ModalHead>
    <ModalBody>
      <TextField placeholder="タスクを入力" full-width />
    </ModalBody>
    <ModalAction>
      <ActionButton>キャンセル</ActionButton>
      <ActionButton variant="primary">確定</ActionButton>
    </ModalAction>
  </Modal>
</template>
