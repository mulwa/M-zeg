import { AbstractControl } from "@angular/forms";
export class CustomValidators {

    static matchPassword(control: AbstractControl){
        if(control && (control.value ===null || control.value !==undefined)){            
            const confirmPass = control.value;
            const password = control.root.value.password;           
            
            
            if(confirm !== password){
                return {
                    isError: true,
                }
            }
            return null;

            
           
            


        }

    }
}