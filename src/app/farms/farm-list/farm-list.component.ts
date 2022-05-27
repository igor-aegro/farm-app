import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  currentFarmId = '';
  currentFarmIdEdit = '';
  farms: Farm[] = [];

  constructor(private farmService: FarmService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFarms();
  }

  public getFarms(): Farm[] {
    this.farmService.getFarms().subscribe({
      next: (response: Farm[]) => this.farms = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
    return this.farms;
  }

  public setFarmId(farmId: string){
    this.currentFarmIdEdit = farmId;
    console.log("idFarm", this.currentFarmIdEdit);
  }

  public setFarmIdDeletion(currentFarmId: string){
    this.currentFarmId = currentFarmId;
    console.log("idFarm", this.currentFarmId);
  }

  public updateFarmList(){
    this.getFarms();
  }
  
}
