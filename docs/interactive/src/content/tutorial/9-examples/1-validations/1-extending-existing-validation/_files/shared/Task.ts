import { Entity, Fields, Validators } from 'remult'

@Entity('tasks', {
  allowApiCrud: true,
})
export class Task {
  @Fields.uuid()
  id = ''

  @Fields.string<Task>({
    validate: Validators.unique,
  })
  title = ''

  @Fields.boolean()
  completed = false

  @Fields.createdAt()
  createdAt?: Date
}
