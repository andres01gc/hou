import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   innerWidth: number;

  constructor(public router: Router) {
    // console.log('inicia!');
    console.log(this.router.url);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log('holi' + this.innerWidth);
  }

  ngOnInit() {
  }
}
