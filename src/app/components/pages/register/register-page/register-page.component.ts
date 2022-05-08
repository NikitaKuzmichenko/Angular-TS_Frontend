import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user-service.service';
import { ErrorMsgProvider } from 'src/app/utils/errorMsgProvider';
import { PageRouter, Pages } from 'src/app/utils/pageRouter';
import { ErrorMsgName } from '../../../../utils/errorMsgProvider';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  register_form = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(1)]),
    password: new FormControl('',[Validators.required,Validators.minLength(1)]),
    repert_password: new FormControl('',[Validators.required,Validators.minLength(1)]),
    name: new FormControl('',[Validators.required,Validators.minLength(1)]),
    email: new FormControl('',[Validators.required,Validators.minLength(1),Validators.email]),
    address: new FormControl('',[Validators.required,Validators.minLength(1)])
  })
  
  errorMsg: string = "";

  constructor(private errorMsgProvider: ErrorMsgProvider, private userService : UserService,
    private router: Router,private pageRouter : PageRouter) { }

  ngOnInit(): void {}

  submitForm(): void {
    
    if(!this.register_form.get("email")?.valid){
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.BadEmailFormat);
      return;
    }

    if(!this.register_form.valid){
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.FormNotFilled);
      return;
    }

    if(this.register_form.get("password")?.value !== this.register_form.get("repert_password")?.value){
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.PasswordsNotMath);
      return;
    }

    const user : User = {
      login : this.register_form.get("login")?.value,
      password : this.register_form.get("password")?.value,
      email : this.register_form.get("email")?.value,
      firstName : this.register_form.get("firstName")?.value,
      address : this.register_form.get("address")?.value
    };

    this.userService.createUser(user).subscribe(user=> {
      this.errorMsg="";
      this.router.navigateByUrl(this.pageRouter.getPath(Pages.MainPage));
    })
  }

  reset(): void {
    this.register_form.reset();
  }

}
