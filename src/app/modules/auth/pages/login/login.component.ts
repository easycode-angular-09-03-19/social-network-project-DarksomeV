import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalAuthService} from "../../../../services/global-auth.service";
import {LoginFormComponent} from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetPasswordModal = false;

  constructor(
    private router: Router,
    private globalAuth: GlobalAuthService
  ) {
  }

  ngOnInit() {
    if (this.globalAuth.isLogin) {
      this.router.navigate(['/']);
    }
  }

}
