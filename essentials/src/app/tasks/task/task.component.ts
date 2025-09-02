import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../interfaces/task-interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    if(this.task.id) {
      this.tasksService.removeTask(this.task.id);
    }
  }
}
