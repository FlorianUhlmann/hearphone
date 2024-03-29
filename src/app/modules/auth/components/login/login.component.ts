import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user: [''],
    password: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
