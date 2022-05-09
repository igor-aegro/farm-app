import { Component, OnInit } from '@angular/core';
import { Farm } from './farm';
import { FarmService } from './farm.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
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
