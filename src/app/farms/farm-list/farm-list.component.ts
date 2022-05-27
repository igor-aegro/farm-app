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
  farm: Farm = {
    id:'',
    name:'',
    glebes:[],
    productivity:0
  };

  constructor(private farmService: FarmService,
              private router: Router,
              public modalService: NgbModal) { }

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

  public addFarmInList(farmEvent: NgForm){
    // this.farm.name = farmEvent.value['name'];
    // this.farms.push(this.farm);
    this.getFarms();
  }

  public setFarmId(farmId: string){
    this.currentFarmIdEdit = farmId;
    console.log("idFarm", this.currentFarmIdEdit);
  }

  public setFarmIdDeletion(currentFarmId: string){
    this.currentFarmId = currentFarmId;
    console.log("idFarm", this.currentFarmId);
  }

  deleteFarmFromList(farmId: string){
    // const farmIndex = this.farms.findIndex(farm => farm.id === farmId);
    // this.farms.splice(farmIndex, 1);
    this.getFarms();
  }

  public updateFarmInList(farmEvent: NgForm){
    // this.farm = this.getFarmById(this.currentFarmIdEdit);
    // console.log("Farm to be updated:", this.farm);
    // this.farm.name = farmEvent.value['name'];
    // console.log("Updated local farm:", this.farm);
    // const farmIndex = this.farms.findIndex(farm => farm.id === this.currentFarmIdEdit);
    // this.farms[farmIndex] = this.farm;
    this.getFarms();
    // console.log("Updated db farm:", this.farms[farmIndex]);
  }

  public getFarmById(id: string) {
    this.farmService.getFarmById(id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
    return this.farm;
  }
  
}
