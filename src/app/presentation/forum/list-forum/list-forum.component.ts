import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-forum',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './list-forum.component.html',
  styleUrl: './list-forum.component.css'
})
export class ListForumComponent {

}
