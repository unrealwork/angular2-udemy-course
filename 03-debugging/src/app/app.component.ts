import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'debug-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.testData.push(`New item: ${i}`);
    }
  }

  testData: string[] = [];


}
