import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  password_CSRF_TOKEN: string;
  response: any;
  constructor(private apiService: APIService) {
    this.apiService.getCangePassword()
      .subscribe(data => {
        this.response = data;
        this.password_CSRF_TOKEN = this.response.fos_user_change_password._token;
      }, error => console.error(error));
  }

  ngOnInit() {
  }

  changePasswordSubmit(form: any) {
    if (form.valid) {
      const params = form.value;
      this.apiService.postCangePassword(params)
        .subscribe(data => {
          console.log(data);
        }, error => console.error(error));
    }
  }

}
