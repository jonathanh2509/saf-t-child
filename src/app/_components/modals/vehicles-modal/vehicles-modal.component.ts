import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalGuardService } from '../../../_services/modal-guard.service';
import _ from 'lodash';
import { CarvanaProxyService } from '../../../_services/carvana.service.proxy';
import { Observable, debounceTime, map, of, startWith, switchMap } from 'rxjs';
import * as Carvana from '../../../_models/carvana';
@Component({
  selector: 'app-vehicles-modal',
  templateUrl: './vehicles-modal.component.html',
  styleUrl: './vehicles-modal.component.scss',
  providers: [CarvanaProxyService],
})
export class VehiclesModalComponent implements OnInit, OnDestroy {
  name: FormControl<string | null> = new FormControl<string | null>(null);
  filteredOptions: Observable<Carvana.Suggestion[]> = of(
    [] as Carvana.Suggestion[],
  );
  form: FormGroup = new FormGroup({
    name: this.name,
  });
  constructor(
    public dialogRef: MatDialogRef<VehiclesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private modalGuardService: ModalGuardService,
    private carvanaProxyService: CarvanaProxyService,
  ) {
    this.form.valueChanges.subscribe((form) => {
      if (!form) {
        return;
      }
      if (_.every(form, _.isEmpty)) {
        return;
      }
      // Avoid saving empty form state
      this.saveFormState();
    });
    this.restoreFormState();

    this.filteredOptions = this.name.valueChanges.pipe(
      startWith(''),
      // Use switchMap to handle the observable from getSuggestions
      switchMap((term) =>
        term ? this.filterCars(term) : of([] as Carvana.Suggestion[]),
      ),
    );
  }

  saveFormState(): void {
    localStorage.setItem('formState', JSON.stringify(this.form.value));
  }

  restoreFormState(): void {
    const savedFormState = JSON.parse(
      localStorage.getItem('formState') || '{}',
    );
    if (!_.isEmpty(savedFormState)) {
      this.form.patchValue(savedFormState);
      this.form.markAsDirty();
    }
  }

  clearDataFromLocalstorage(): void {
    localStorage.removeItem('formState');
  }

  ngOnInit(): void {
    window.addEventListener(
      'beforeunload',
      this.preventUnsavedChanges.bind(this),
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'beforeunload',
      this.preventUnsavedChanges.bind(this),
    );
  }

  @HostListener('window:beforeunload', ['$event'])
  preventUnsavedChanges(event: BeforeUnloadEvent): void {
    if (this.form.dirty) {
      event.returnValue = true; // Chrome requires returnValue to be set
    }
  }
  displayFn(suggestion: Carvana.Suggestion): string {
    return suggestion && suggestion.text ? suggestion.text : '';
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      switchMap((term) => (term === '' ? [] : this.filterCars(term))),
    );

  private filterCars(term: string): Observable<Carvana.Suggestion[]> {
    return this.carvanaProxyService
      .getSuggestions(term)
      .pipe(map((results) => results.suggestions.slice(0, 10)));
  }

  onClose(): void {
    if (this.modalGuardService.canDeactivate(this.form)) {
      this.clearDataFromLocalstorage();
      this.dialogRef.close({
        action: 'close',
        data: null, // Or any other data you wish to return
      });
    }
  }
}
