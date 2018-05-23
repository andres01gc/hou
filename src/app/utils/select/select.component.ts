import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() titulo: string;
  @Input() data: any[];
  @Input() value = '';
  @Output() selected = new EventEmitter();
  @Input() size: string;
  @Input() lock = false;
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
    }

    // console.log(ss);
    this.ssize = this.dat.sizes[this.size][ss] + '%';
    // event.target.innerWidth;
  }

  constructor(private dat: DataService) {
    if (this.value = '') {
      this.value = this.titulo;
    }
  }

  ngOnInit() {

  }

  onChange(s: any) {
    console.log('se selecciona en el select');
    this.selected.emit(s);
  }
}
