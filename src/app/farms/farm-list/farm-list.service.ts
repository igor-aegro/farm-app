import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { EditFarmComponent } from '../edit-farm/edit-farm.component';
import { FarmDialogsComponent } from '../farm-dialogs/farm-dialogs.component';

@Injectable({
    providedIn: 'root'
})
export class FarmListService implements OnInit { 
  farms: Farm[] = [];
  farmsChanged = new EventEmitter<Farm[]>();
  farm: Farm = {
    id:'',
    name:'',
    glebes:[],
    productivity:0
  };

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
      this.getFarms();
  }

  public getFarms(): Farm[] {
    this.farmService.getFarms().subscribe(
      (response: Farm[]) => {
        this.farms = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
    this.farmsChanged.emit(this.farms);
    return this.farms;
  }

  public getFarmById(id: string) {
    this.farm.id = id;
    this.farmService.getFarmById(this.farm.id).subscribe(
      (response: Farm) => {
        console.log("Response");
        this.farm = response;
        console.log(this.farm);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  } 
  
}
