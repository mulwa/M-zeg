import { AbstractControl } from "@angular/forms";
export class CustomValidators {

    static matchPassword(control: AbstractControl):{[s:string]:boolean}{
        if(control && (control.value ===null || control.value !==undefined)){
            const cnfpass = control.value;
            const passcontrol = control.root.get('password')

            if(passcontrol){
               const passValue = passcontrol.value;
               
               if(passValue !== cnfpass){
                   return {
                       'misMatch': true
                   }
               }
               return null;
            }
              
            


        }

    }
}