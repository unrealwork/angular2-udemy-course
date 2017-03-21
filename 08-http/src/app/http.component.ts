import {Component, OnInit} from '@angular/core';
import {HttpTestService} from './http-test.service';
import {Response} from '@angular/http';


@Component({
  selector: 'http-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpTestService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({
      username: username,
      email: email
    }).subscribe((data) => console.log(data));
  };

  onGetData() {
    this.httpService.getMyOwnData().subscribe(
      (items) => {
        this.items = items;
      }
    );
  }
}
