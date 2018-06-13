import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  modelLogin: any = {};

  posts: any = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    console.log('1')
    this.postService.obtener().subscribe(res => {
      console.log('2');
      console.log('3');
      console.log(res);
      this.posts = res;
    });
   
    
  }

  enviar(model) {
    console.log(model);
    this.postService.enviar(model).subscribe(res => {
      console.log(res);
    });
  }
}
