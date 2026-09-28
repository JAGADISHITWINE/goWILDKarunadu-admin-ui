import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent implements OnInit {
  credentials: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  showPassword = false;
  loginError = '';
  isSubmitting = false;

  constructor(
    private router: Router,
    private loginService: Login,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  login() {

    if (this.credentials.invalid || this.isSubmitting) {
      this.credentials.markAllAsTouched();
      return;
    }

    this.loginError = '';
    this.isSubmitting = true;
    this.cdr.detectChanges();

    this.loginService.auth(this.credentials.value).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        const user = res?.user || res?.data?.user;
        const isSuccess = res?.response === true || res?.success === true || !!user;


        if (isSuccess && user) {
          this.authService.setUser(user);
          const token = res?.token || res?.data?.token;
          if (token) {
            sessionStorage.setItem('token', token);
            localStorage.setItem('token', token);
          }
          this.credentials.reset();
          const targetRoute = this.authService.getDefaultAuthorizedRoute() || '/admin/dashboard';
          this.cdr.detectChanges();
          this.router.navigate([targetRoute], { replaceUrl: true }).then((navResult) => {
            if (!navResult) {
              this.router.navigateByUrl(targetRoute);
            }
          }).catch((navErr) => {
            this.router.navigateByUrl(targetRoute);
          });
          return;
        }

        this.loginError = res?.message || res?.data?.message || 'Invalid email or password';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSubmitting = false;
        let errMsg = 'Invalid email or password';
        const errObj = err?.error;

        if (errObj && typeof errObj === 'object') {
          if (errObj.message) {
            errMsg = errObj.message;
          } else if (errObj.data && typeof errObj.data === 'object' && errObj.data.message) {
            errMsg = errObj.data.message;
          }
        } else if (typeof errObj === 'string') {
          try {
            const parsed = JSON.parse(errObj);
            if (parsed?.message) errMsg = parsed.message;
          } catch { }
        } else if (err?.message) {
          errMsg = err.message;
        }

        this.loginError = errMsg;
        this.cdr.detectChanges();
      },
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
