import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { EditFarmComponent } from '../edit-farm/edit-farm.component';
import { FarmDialogsComponent } from '../farm-dialogs/farm-dialogs.component';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
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

  public addFarmInList(farmName:string){
    this.farm.name = farmName;
    this.farms.push(this.farm);
    this.getFarms();
  }

  public getFarmById(id: string) {
    this.farm.id = id;
    this.farmService.getFarmById(this.farm.id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
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
