import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-samples',
  templateUrl: './bootstrap-samples.component.html',
  styleUrl: './bootstrap-samples.component.scss'
})
export class BootstrapSamplesComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
