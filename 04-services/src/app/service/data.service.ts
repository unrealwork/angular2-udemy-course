import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {

  private data: string[] = [];

  pushedData = new EventEmitter<string>();

  constructor(private logService: LogService) {
  }

  addData(num: string) {
    this.data.push(num);
    this.logService.writeToLog(`Saved item: ${num}`);
  }

  getData() {
    return this.data;
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }
}
