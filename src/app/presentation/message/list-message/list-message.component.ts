import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-message',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {

}
