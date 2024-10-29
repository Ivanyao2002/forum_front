import { Routes } from '@angular/router';
import {authGuard} from './core/guards/auth/auth.guard';
import {ListForumComponent} from './presentation/forum/list-forum/list-forum.component';
import {AddForumComponent} from './presentation/forum/add-forum/add-forum.component';
import {HomeComponent} from './presentation/home/home.component';
import {NavbarComponent} from './presentation/navbar/navbar.component';
import {ListMessageComponent} from './presentation/message/list-message/list-message.component';
import {ListTopicComponent} from './presentation/topic/list-topic/list-topic.component';
import {AddMessageComponent} from './presentation/message/add-message/add-message.component';
import {AddTopicComponent} from './presentation/topic/add-topic/add-topic.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: "Forum'It"},
  {path: '', component: NavbarComponent, children: [
    {path: 'list-forum', component: ListForumComponent, title: 'Forum'},
    {path: 'list-message', component: ListMessageComponent, title: 'Message'},
    {path: 'list-topic', component: ListTopicComponent, title: 'Topic'},
    {path: 'add-forum', component: AddForumComponent, title: 'Forum'},
    {path: 'add-message', component: AddMessageComponent, title: 'Message'},
    {path: 'add-topic', component: AddTopicComponent, title: 'Topic'},

    ]},
  // {path: '', component: ForumComponent, canActivate: [authGuard]},
];
