import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ModalGuardService {
  constructor() {}

  canDeactivate(form: FormGroup): boolean {
    if (form.dirty) {
      return confirm(
        'You have unsaved changes. Are you sure you want to leave?',
      );
    }
    return true;
  }
}
