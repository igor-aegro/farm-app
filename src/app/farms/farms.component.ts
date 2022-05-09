import { Component, OnInit } from '@angular/core';
import { Farm } from './farm';
import { FarmService } from './farm.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  public farm: Farm[] = [];

  constructor(private farmService: FarmService){}

  ngOnInit() {
      this.getFarms();
  }

  public getFarms(): void {
    this.farmService.getFarms().subscribe(
      (response: Farm[]) => {
        this.farm = response;
      }
    );
  }

}
