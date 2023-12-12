import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  /**
   * Function - Login
   * Use - To Login User into the application
   * @param postData
   * @returns
   */
  login(postData : any){
    return this._http.post(environment.baseUrl + '/login', postData, {observe : 'response'});
  }


  /**
   * Function - forgetPassword()
   * Use - To recover the password
   * @param postData
   * @returns
   */
  forgetPassword(postData : any){
    return this._http.post(environment.baseUrl + '/forget-password', postData, {observe : 'response'})
  }


  /**
   * Function - changePassword()
   * Use - To change the existing password
   * @param postData
   * @returns
   */
  changePassword(postData : any){
    return this._http.post(environment.baseUrl + '/change-password', postData, {observe : 'response'})
  }


  /**
   * Function - updateProfile()
   * Use - To change the Profile for User
   * @param postData
   * @returns
   */
  updateProfile(userId : number, postData : any){
    return this._http.post(environment.baseUrl + '/update-profile/'+userId, postData, {observe : 'response'})
  }
}
