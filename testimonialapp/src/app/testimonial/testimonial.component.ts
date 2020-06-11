import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/userInterface';
import { userfeedback } from 'src/app/userImp';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  newuser: userInterface[];
  userfeedback: any = {};
  constructor() { }

  ngOnInit(): void {
    this.newuser = userfeedback;
  }
  adduser(userfeedback): any {
    console.log('Add new user');
    this.newuser.unshift(userfeedback);
  }

}
