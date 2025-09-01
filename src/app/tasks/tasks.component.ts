import { Component, inject, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: number;

  public isCloseModal: boolean = false;
  public isAddingTask: boolean = false;
  private tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksService.getAllTasks();
    console.log('hi')
  }
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
