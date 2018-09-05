import { AbstractControl } from "@angular/forms";
export class CustomValidators {

    static matchPassword(control: AbstractControl){
        if(control && (control.value !==null || control.value !==undefined)){            
            const confirmPass = control.value;
            const passwordControl = control.root.get('password');
           
            const password =  passwordControl.value;
            
            if(confirm !== password){
                return {
                    isError: true,
                }
            }
            return null;


        }

    }
}