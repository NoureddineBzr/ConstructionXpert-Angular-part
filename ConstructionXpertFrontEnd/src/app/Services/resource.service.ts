import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Resource} from "../entities/resource";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private apiUrl = `http://localhost:8080/resources`; // Adjust to your actual API URL

  constructor(private http: HttpClient) {}

  // Create Resource
  createResource(resource: Resource): Observable<Resource> {
    if (!resource.taskId) {
      throw new Error("Task ID must not be null");
    }
    return this.http.post<Resource>(this.apiUrl, resource);
  }

  // Get all resources
  getAllResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }

  // Get resources by Task ID
  getResourcesByTaskId(taskId: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiUrl}/task/${taskId}`);
  }

  // Update Resource
  updateResource(id: number, resourceDetails: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.apiUrl}/${id}`, resourceDetails);
  }

  // Delete Resource
  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
