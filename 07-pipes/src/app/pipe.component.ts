import {Component, OnInit} from '@angular/core';
import {DoublePipe} from './double.pipe';

@Component({
  selector: 'pipes-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {
  myValue = 'lowercase';
  myDate = new Date();
  values = ['efr', 'ae', 'Igor'];

  constructor() {
  }

  ngOnInit() {
  }

}
