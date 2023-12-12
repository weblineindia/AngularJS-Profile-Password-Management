import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm! : FormGroup;

  constructor(private _fb : FormBuilder,
              private _authService : AuthService,
              private _toastr : ToastrService,
              private _router : Router){}

  ngOnInit(): void {
      this.changePasswordForm = this._fb.group({
        currentPassword  :  ['',Validators.required],
        newPassword  :  ['',Validators.required],
        confirmPassword  :  ['',Validators.required]
      }, { validators: this.passwordMatchValidator })
  }

  /**
   * passwordMatchValidator - To check the new and confirm new password validation
   * @param formGroup
   * @returns
   */
  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  /**
   * Function - submit()
   * Use - To call an API and change the password
   * @param formValue
   */
  submit(formValue : any){
    let postData = {
      currentPassword : formValue.currentPassword,
      newPassword : formValue.newPassword,
      confirmPassword : formValue.confirmPassword
    }

    this._authService.changePassword(postData).subscribe({
      next : (res: any) => {
        if(res.status === 200){
          //Write your logic after response is received
          this._toastr.success('Password Changed Successfully..', 'Success');
        }
      },
      error : (err : any) => {
        this._toastr.error(err.error.message, 'Error');
      },
      complete : () => {
        //Write your logic after API completion
        this._router.navigate(['/dashboard'])
      }
    });
  }
}
