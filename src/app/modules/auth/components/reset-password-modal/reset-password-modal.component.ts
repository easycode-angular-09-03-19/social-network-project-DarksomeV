import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit(event) {
    this.authService.resetPassword({email: this.resetPasswordForm.controls.email.value}).subscribe((res) => {
      if (!res.error) {
        this.closeModal();
      }
    }, (err)=>{
      console.log(err);
    });
  }


}
