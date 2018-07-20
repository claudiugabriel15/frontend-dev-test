import { Component, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [
    trigger('loginFailed', [
      state('true', style({
      })),
      transition('* => true', [
        animate(300, keyframes([
          style({transform: 'rotateZ(5deg)', offset: 0}),
          style({transform: 'rotateZ(-5deg)', offset: 0.3}),
          style({transform: 'rotateZ(5deg)', offset: 0.6}),
          style({transform: 'rotateZ(-5deg)', offset: 1.0})
        ]))
      ]),
    ])
  ]
})

export class LoginFormComponent {
  @Input() animateForm;
  @Output() submitForm = new EventEmitter<any>();

  userData: any;

  constructor() {
    this.userData = {
      username: '',
      password: ''
    };
  }

  onSubmit() {
    this.submitForm.emit(this.userData);
  }
}
