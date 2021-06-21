import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup= this._formBuilder.group({
    Email: ['Example@mail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    Password: ['123', [Validators.required, Validators.minLength(2)]],
  });
  constructor(private _formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
  }

  login() {
    alert(JSON.stringify(this.userForm.value))
  }
}
