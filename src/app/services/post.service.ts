import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  enviar(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
