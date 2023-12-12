import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userId : number = 1;

  constructor(private fb: FormBuilder,
              private _authService : AuthService,
              private _toastr : ToastrService,
              private _router : Router) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      gender: ['male', Validators.required],
      contactNumber: ['9998999898', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [{ value: 'john@doe.com', disabled: true }]
    });
  }

  updateProfile(formValue : any) {
    let postData = {
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      gender : formValue.gender,
      contactNumber : formValue.contactNumber,
      email : formValue.email
    }

    this._authService.updateProfile(this.userId, postData).subscribe({
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
