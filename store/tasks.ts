import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export type TaskRecord = {
  id: number
  content: string
  isCompleted: boolean
}

@Module({
  name: 'tasks',
  stateFactory: true,
  namespaced: true,
})
export default class TasksModule extends VuexModule {
  maxId = 0

  list: TaskRecord[] = [
    {
      id: this.maxId++,
      content: 'サンプルタスク',
      isCompleted: false,
    },
    {
      id: this.maxId++,
      content: '完了済みタスク',
      isCompleted: true,
    },
  ]

  @Mutation
  addTask(content: string) {
    this.list.push({ id: this.maxId++, content, isCompleted: true })
  }

  @Mutation
  editTask(id: number, data: { content: string; isCompleted: boolean }) {
    const task = this.list.find((task) => task.id === id)

    if (task) {
      Object.assign(task, data)
    }
  }

  @Mutation
  deleteTask(id: number) {
    const index = this.list.findIndex((task) => task.id === id)

    if (index !== -1) {
      this.list.splice(index, 1)
    }
  }
}
