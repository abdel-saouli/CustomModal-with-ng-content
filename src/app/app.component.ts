import { Component } from '@angular/core';

import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalAboutComponent } from './modal-about/modal-about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The test of Modal with ng-content';

  constructor(private modalService: NgbModal) {}

  openModalComponent() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'A simple Modal';
  }
  openModalAboutComponent() {
    const modalRef = this.modalService.open(ModalAboutComponent);
    console.log("modal informations : ", modalRef.componentInstance)
  }
}
