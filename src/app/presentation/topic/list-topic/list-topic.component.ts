import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-topic',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './list-topic.component.html',
  styleUrl: './list-topic.component.css'
})
export class ListTopicComponent {

}
