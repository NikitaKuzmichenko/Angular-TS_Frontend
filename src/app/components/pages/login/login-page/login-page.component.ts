import { ErrorMsgName, ErrorMsgProvider } from '../../../../utils/errorMsgProvider';
import { UserService } from '../../../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageRouter, Pages } from 'src/app/utils/pageRouter';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  login_form = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(1)]),
    password: new FormControl('',[Validators.required,Validators.minLength(1)])
  })

  errorMsg: string = "";
  
  constructor(private errorMsgProvider: ErrorMsgProvider, private userService : UserService,
    private router: Router,private pageRouter : PageRouter) {}

  ngOnInit(): void {}

  submitForm(param : void):void{
    if(!this.login_form.valid){
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.FormNotFilled);
      return;
    }
    
    let subsciption = this.userService.getUserByLogin(this.login_form.get("login")?.value).subscribe(
      users=>{
        if(users === undefined || users.length == 0){
          this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.AuthorizationFailed);
          return;
        }
        if(users[0].password !==  this.login_form.get("password")?.value){
          this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.AuthorizationFailed);
          return;
        }
        this.errorMsg="";
        this.router.navigateByUrl(this.pageRouter.getPath(Pages.MainPage));
        subsciption.unsubscribe();
      }
    );
  }
}
