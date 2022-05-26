import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { EditFarmComponent } from '../edit-farm/edit-farm.component';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  idFarmEdit = '';
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

  public getFarms(): void {
    this.farmService.getFarms().subscribe({
      next: (response: Farm[]) => this.farms = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

  public addFarmInList(farmEvent: NgForm){
    this.farm.name = farmEvent.value['name'];
    this.farms.push(this.farm);
    this.getFarms();
  }

  public setFarmId(farmId: string){
    this.idFarmEdit = farmId;
    console.log("idFarm", this.idFarmEdit);
  }

  public updateFarmInList(farmEvent: NgForm, idFarmEdit: string){
    console.log("edit id", idFarmEdit);
    farmEvent.value['id'] = idFarmEdit;
    this.farm = this.getFarmById(farmEvent.value['id']);
    console.log("Farm to be updated:", this.farm);
    this.farm.name = farmEvent.value['name'];
    console.log("Updated local farm:", this.farm);
    const farmIndex = this.farms.findIndex(farm => farm.id === farmEvent.value['id']);
    this.farms[farmIndex] = this.farm;
    this.getFarms();
    console.log("Updated db farm:", this.farms[farmIndex]);
  }

  public getFarmById(id: string) {
    this.farmService.getFarmById(id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
    return this.farm;
  } 

  openEditModal(id: string) {
    this.farmService.getFarmById(id);
    const modalRef = this.modalService.open(EditFarmComponent);
    modalRef.componentInstance.farm = this.farm;
    console.log("Current info from farm:");
    console.log(this.farm);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  
}
