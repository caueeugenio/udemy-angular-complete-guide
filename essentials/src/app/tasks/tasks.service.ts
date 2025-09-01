import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}
  url = 'http://localhost:8080/api/tasks';

  private tasks: ITask[] = [];

  getAllTasks() {
    this.httpClient.get<ITask[]>(this.url).subscribe({
      next: (value: ITask[]) => {
        this.tasks = value;
      },
    });
  }

  getUserTasks(userId: number) {
    return this.tasks.filter((task: ITask) => task.userId === userId);
  }
  addTask(taskData: ITask) {
    this.httpClient.post(this.url, taskData).subscribe({
      next: (value) => {
        console.log(value);
        this.getAllTasks();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeTask(id: number) {
    this.httpClient.delete<ITask>(`${this.url}/${id}`).subscribe({
      next: () => {
        this.getAllTasks();
      },
    });
  }
}
