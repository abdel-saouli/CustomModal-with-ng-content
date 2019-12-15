import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})
export class ModalAboutComponent implements OnInit {
   
   @Input() title = `Information`;
   
  constructor() { }

  ngOnInit() {
  }

}
