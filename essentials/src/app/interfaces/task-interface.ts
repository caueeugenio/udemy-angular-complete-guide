export interface ITask {
  id?: number;
  userId: number;
  title: string;
  summary: string;
  dueDate: string;
}
export interface INewTask {
  title: string;
  summary: string;
  date: string;
}
