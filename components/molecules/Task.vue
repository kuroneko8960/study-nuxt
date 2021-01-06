<template>
  <div class="task">
    <div class="task__content">
      <Checkbox :label="content" />
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

@Component
export default class Task extends Vue {
  @Prop({ type: String })
  readonly content!: string
}
</script>
