import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  constructor() {}
  sharedData: any;

  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    console.log(this.sharedData.data);
    return this.sharedData.data;
  }
}
