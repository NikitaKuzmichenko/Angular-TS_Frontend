import { Injectable } from "@angular/core";

export enum ErrorMsgName {
    UserLoginAllredyExists,
    PasswordsNotMath,
    CertificateNameAllredyExists,
    InvalidEpirationDate,
    AuthorizationFailed,
    BadEmailFormat,
    BadPriceFormat,
    FormNotFilled,
    DefaultError
}

@Injectable({
    providedIn: 'root'
  })
export class ErrorMsgProvider{
    private errorMap : Map<ErrorMsgName,string> ;

    constructor(){
        this.errorMap = new Map<ErrorMsgName,string>();
        this.errorMap.set(ErrorMsgName.UserLoginAllredyExists,"User with this login allredy exists");
        this.errorMap.set(ErrorMsgName.PasswordsNotMath,"Passwords does not match");
        this.errorMap.set(ErrorMsgName.CertificateNameAllredyExists,"Certificate with this name allredy exists");
        this.errorMap.set(ErrorMsgName.InvalidEpirationDate,"Ivalid expiration date");
        this.errorMap.set(ErrorMsgName.AuthorizationFailed,"Incorrect login or password");
        this.errorMap.set(ErrorMsgName.BadEmailFormat,"Bad email");
        this.errorMap.set(ErrorMsgName.BadPriceFormat,"Bad price format");
        this.errorMap.set(ErrorMsgName.FormNotFilled,"Required fields are not filled");
        this.errorMap.set(ErrorMsgName.DefaultError,"Unknown error occurred");
    }

    public getErrorByName(errorName : ErrorMsgName) : string{
        if(!this.errorMap.has(errorName)){
            errorName = ErrorMsgName.DefaultError; 
        }
        let result = this.errorMap.get(errorName)
        if(result === undefined){
            return "";
        }
        return result;
    }
}