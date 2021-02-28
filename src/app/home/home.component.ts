import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostModel } from '../shared/post-model';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  posts: Array<any> = [];

  constructor(private postService: PostService) {
    this.postService = postService;
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      console.log(post)
      this.posts.concat(post);
    })
  }
  

}