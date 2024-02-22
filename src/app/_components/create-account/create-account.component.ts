import { Component, HostListener, Input, OnInit } from '@angular/core';
import { windowBreakpoint } from '../../../../environment';
import { SafTChildServiceProxy } from '../../_services/saft-t-child.service.proxy';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
  providers: [SafTChildServiceProxy],
})
export class CreateAccountComponent implements OnInit {
  // Class binding property
  contentActive = false;
  showInvalidLogin = false;
  isLoading = false;

  //TODO: add validation to make sure that username is not already taken
  username: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );
  firstName: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );
  lastName: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );

  //TODO: Add phone number validation
  // make sure that phone number is good and that
  // it is not assigned to another account
  phoneNumber: FormControl<any | null> = new FormControl(null, [
    Validators.required,
    this.americanPhoneNumberValidator,
  ]);

  //TODO: Add email validation
  // make sure that email is good and that
  // it is not assigned to another account
  email: FormControl<any | null> = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);
  password: FormControl<any | null> = new FormControl(
    null,
    Validators.required,
  );
  formGroup: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    firstName: this.firstName,
    lastName: this.lastName,
    phoneNumber: this.phoneNumber,
    email: this.email,
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
    private fb: FormBuilder,
    private router: Router,
  ) {}
  createAccount() {
    console.log(this.formGroup);
    this.isLoading = true;
    // timer(1500)
    //   .pipe(
    //     // After the timer emits, switch to the getLogin() observable
    //     switchMap(() => this.safTChildServiceProxy.getLogin()),
    //   )
    //   .subscribe({
    //     next: () => {
    //       console.log('good');
    //       this.router.navigate(['/dashboard']);
    //       // Remember to set isLoading to false once the operation is complete
    //       this.isLoading = false;
    //     },
    //     error: () => {
    //       console.log('bad');
    //       // Handle error, possibly also setting isLoading to false
    //       this.isLoading = false;
    //       this.showInvalidLogin = true;
    //     },
    //   });
  }

  americanPhoneNumberValidator(control: AbstractControl) {
    const phoneNumber = control.value;
    if (phoneNumber) {
      const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (phoneNumberRegex.test(phoneNumber)) {
        return null;
      }
      return { invalidPhoneNumber: true };
    }
    return null;
  }
}
