import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../entities/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = `http://localhost:8080/tasks`; // Adjust based on your backend API

  constructor(private http: HttpClient) {}

  // Create a new Task
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Get tasks by Project ID
  getTasksByProjectId(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/project/${projectId}`);
  }

  // Get all tasks
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Get task by ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  // Update an existing Task
  updateTask(id: number, taskDetails: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, taskDetails);
  }

  // Delete a Task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Check if a task exists
  existTask(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${id}`);
  }
}
