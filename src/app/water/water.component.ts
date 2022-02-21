import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operator/switchMap';
import { WaterPressureService } from '../water-pressure.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
  providers: [
    {provide: WaterPressureService, useExisting: WaterPressureService}
  ]
})
export class WaterComponent implements OnInit {
  private id: number;
  private stream$: Observable<any>;
  constructor(private waterService: WaterPressureService) { }

  ngOnInit() {
    this.stream$ = this.waterService.getStart()
    .pipe(
      switchMap(id => {return this.waterService.geStatus(id)})
    )
  }

}
