import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  @Input() base_titulos = [];
  @Input() centrar = false;
  @Input() nombre = 'testing';
  @Input() lock = false;
  @Input() data: any;
  dt: any = null;
  @Output() selected = new EventEmitter();
  @Input() size: string;
  @HostBinding('style.width') private ssize = '';


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var ss = 0;
    if (event.target.innerWidth < 500) {
      // movil
      ss = 0;
    } else if (event.target.innerWidth < 900) {
      ss = 1;
      // tablet
    } else {
      ss = 2;
      // pc
    }

    console.log('is workin ' + ss);
    console.log(this.size);
    this.ssize = this.dat.sizes[this.size][ss] + '%';
    // event.target.innerWidth;
  }

  constructor(private dat: DataService) {
  }

  ngOnInit() {
    this.organizarTitulosSimple();
  }

  activarItem(index: number) {
    if (!this.lock) {
      this.dt[index].activo = !this.dt[index].activo;
    }
  }

  // v1 organiza el nombre de los titulos, y le crea su propio, booleano que lo contiene. todo Sé que se puede hacer mucho mucho mas limpio
  organizarTitulosSimple() {
    if (this.data == null || this.data === '') {
      this.dt = [];
      for (let i = 0; i < this.base_titulos.length; i++) {
        this.dt.push({'nombre': this.base_titulos[i], activo: false});
      }
    } else {
      this.dt = this.data;
    }
  }
}
