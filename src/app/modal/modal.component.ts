import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content:Object) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openLg(content:Object) {
    this.modalService.open(content, { size: 'lg' });
  }
}
