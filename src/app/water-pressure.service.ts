import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

enum status {
  open,
  closed,
  pendding
}

@Injectable()
export class WaterPressureService {
  private readonly apiName = '';
  constructor(private http: any) { }

  getStart(): Observable<any> {
    return this.http.get(this.apiName + '/start');
  }

  geStatus(id: number): Observable<any> { // obesevable
    return this.http.get(`${this.apiName}/check/${id}`);
  }

  getResource<T>(id: number): T {
    return <T>this.http.get(`/result/${id}`);
  }
}
