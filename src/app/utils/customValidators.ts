import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class DateValidator{

    public static isAfterCurrentDate(): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            const inputDate = control.value;
            if(inputDate === undefined){
                return {invalideDate: {value: control.value}}
            }

            if(new Date(inputDate).getTime() <=  new Date().getTime()){
                return {invalideDate: {value: control.value}}
            }
            
            return null;
        }
    }
}

export class PriveValidator{

    private static validatinRegex : string = "^([1-9][0-9](\.[0-9]{3})*|[0-9]+)(.[0-9]{1,2})?$";
    private static minPrice : number = 0;
    private static maxPrice : number = Number.MAX_VALUE;

    public static isPriveValid(minPrice?: number,maxPrice?: number,validatinRegex?: string ): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {

            if(minPrice === undefined){
                minPrice = this.minPrice;
            }
            if(maxPrice === undefined){
                maxPrice = this.maxPrice;
            }
            if(validatinRegex === undefined){
                validatinRegex = this.validatinRegex;
            }

            const regex : RegExp  = new RegExp(validatinRegex);
            const inputPrice = control.value;

            if(!regex.test(inputPrice)){
                return {invalidePriceFormath: {value: control.value}}
            }

            const price = parseFloat(inputPrice) ;
            
            if(price < minPrice){
                return {priceToLow: {value: control.value}}
            }

            if(price > maxPrice){
                return {priceToBig: {value: control.value}}
            }
            
            return null;
        }

    }
}