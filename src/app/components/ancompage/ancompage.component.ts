import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ancompage',
  templateUrl: './ancompage.component.html',
  styleUrls: ['./ancompage.component.css']
})
export class AncompageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg');
  }

}
