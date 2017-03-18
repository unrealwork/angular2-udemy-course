import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation: string = 'This is a string interpolation!'
  numberInterpolation: number = 2;

  constructor() {
  }

  ngOnInit() {
  }

  public onTest(): boolean {
    return false;
  }


  public onClicked(value: string) {
    alert(value);
  }
}
