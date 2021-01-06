<template>
  <table class="task-table">
    <thead class="task-table__head">
      <tr>
        <th>タスク名</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody class="task-table__body">
      <tr v-for="idx in 5" :key="idx">
        <td>
          <Checkbox :label="`Task ${idx}`" />
        </td>
        <td>
          <IconButton icon="edit" />
          <IconButton icon="delete" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
