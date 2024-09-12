import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TaskService} from "../../Services/task.service";
import {Task} from "../../entities/task";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  tasks$: Observable<Task[]> | undefined;
  taskForm: FormGroup;
  editingTask: Task | null = null;

  constructor(private taskService: TaskService, private fb: FormBuilder
)
  {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: [''],
      // Ajoutez d'autres champs nécessaires pour une tâche
    });
  }

  ngOnInit()
:
  void {
    this.loadTasks();
  }

  loadTasks()
:
  void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  onSubmit()
:
  void {
    if(this.taskForm.valid
)
  {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask.id, this.taskForm.value).subscribe(() => {
        this.loadTasks();
        this.taskForm.reset();
        this.editingTask = null;
      });
    } else {
      this.taskService.createTask(this.taskForm.value).subscribe(() => {
        this.loadTasks();
        this.taskForm.reset();
      });
    }
  }
}

  onEdit(task
:
  Task
):
  void {
    this.editingTask = task;
    this.taskForm.patchValue(task);
  }

  onDelete(task
:
  Task
):
  void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.loadTasks();
    });
  }
}

