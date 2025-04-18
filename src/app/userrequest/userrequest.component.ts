import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-userrequest',
  imports: [
    NgForOf
  ],
  templateUrl: './userrequest.component.html',
  styleUrl: './userrequest.component.css'
})
export class UserrequestComponent {
  newusers=[{
    id: 1,
    name:'ahmad',
    email:'ahmad@gmail.com',
    status:'pending',
  }
    ,{
      id: 2,
      name:'anthony',
      email:'anthony@gmail.com',
      status:'pending',
    },
    {
      id: 3,
      name:'lara',
      email:'lara@gmail.com',
      status:'pending',
    }]

  showusers() {
    return this.newusers.filter(user => user.status === 'pending');
  }
  approveUser(id: number) {
    const user = this.newusers.find(u => u.id === id);
    if (user) {
      user.status = 'approved';
    }
  }

  rejectUser(id: number) {
    const user = this.newusers.find(u => u.id === id);
    if (user) {
      user.status = 'rejected';
    }
  }


}
