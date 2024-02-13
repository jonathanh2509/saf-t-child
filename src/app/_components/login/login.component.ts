import { Component, HostListener, Input, OnInit } from '@angular/core';
import { windowBreakpoint } from '../../../../environment';
import { SafTChildServiceProxy } from '../../_services/saft-t-child.service.proxy';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap, timer } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [SafTChildServiceProxy],
})
export class LoginComponent implements OnInit {
  // Class binding property
  contentActive = false;
  showInvalidLogin = false;
  isLoading = false;

  username: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );
  password: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );
  formGroup: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  });

  isMobile: boolean = window.innerWidth < windowBreakpoint; // Example breakpoint

  ngOnInit() {
    this.contentActive = true;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < windowBreakpoint;
  }
  constructor(
    private safTChildServiceProxy: SafTChildServiceProxy,
    private router: Router,
  ) {}
  login() {
    console.log(this.formGroup);
    this.isLoading = true;
    timer(1500)
      .pipe(
        // After the timer emits, switch to the getLogin() observable
        switchMap(() => this.safTChildServiceProxy.getLogin()),
      )
      .subscribe({
        next: () => {
          console.log('good');
          // Remember to set isLoading to false once the operation is complete
          this.isLoading = false;
        },
        error: () => {
          console.log('bad');
          // Handle error, possibly also setting isLoading to false
          this.isLoading = false;
          this.showInvalidLogin = true;
        },
      });
  }
}
