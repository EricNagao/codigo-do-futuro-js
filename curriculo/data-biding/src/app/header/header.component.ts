import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() title = 'WelLcOmE - Bem Vindo';

  constructor() { }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log ('ngAfterViewInit');
  }

}
