import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  constructor() {}
  public sharedData: any = {};
  guId: string = '';
}
