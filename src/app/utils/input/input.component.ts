import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder = '';
  @Input() lock = true;
  @Input() type = 'text';
  @Input() value = '';
  @Input() size = '';
  @Input() cagetegoria = '';
  @Input() sub_cagetegoria = '';
  @Input() nombre_db = '';
  @Output() texted = new EventEmitter();
  @HostBinding('style.width') private ssize = '';

  sizes: any = {
    xs: [0, 0, 0],
    s: [50, 25, 16.2],
    m: [100, 50, 33],
    l: [100, 100, 100],
    xl: [0, 0, 0]
  };

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

    // console.log(ss);
    this.ssize = this.sizes[this.size][ss] + '%';
    // event.target.innerWidth;
  }

  constructor() {
  }

  ngOnInit() {
    if (this.placeholder === '') {
      this.placeholder = this.name;
    }
  }

  onKey(event: KeyboardEvent) {
    this.texted.emit((<HTMLInputElement>event.target).value);
  }


}
