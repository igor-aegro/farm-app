import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { EditFarmComponent } from '../edit-farm/edit-farm.component';
import { FarmDialogsComponent } from '../farm-dialogs/farm-dialogs.component';
import { FarmListService } from './farm-list.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  farms!: Farm[];

  constructor(private farmListService: FarmListService,
              private router: Router,
              public modalService: NgbModal) { }

  ngOnInit(): void {
    this.farms = this.farmListService.getFarms();
    this.farmListService.farmsChanged.subscribe(
      (farms:Farm[]) => {
        this.farms = farms;
      }
    );
    console.log(this.farms);
    console.log("jkdsgjk");
    this.farmListService.getFarms();
  }

  openEditModal(id: string) {
    this.farmListService.getFarmById(id);
    // const modalRef = this.modalService.open(EditFarmComponent);
    // modalRef.componentInstance.farm = this.farmListService.farm;
    // console.log("Current info from farm:");
    // console.log(this.farmListService.farm);
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }
  
}
