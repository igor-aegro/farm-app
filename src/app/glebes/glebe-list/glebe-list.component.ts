import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { Glebe } from 'src/app/models/glebe.model';
import { FarmService } from 'src/app/services/farm.service';
import { GlebeService } from 'src/app/services/glebe.service';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {
  currentGlebeId = '';
  currentGlebeIdEdit = '';
  farm: Farm = {
    id:'',
    name:'',
    glebes:[],
    productivity:0
  }

  constructor(private farmService: FarmService,
              private glebeService: GlebeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.farm.id = this.route.snapshot.params['id'];
    this.getGlebesFromFarm();
  }

  getFarmById(){
    this.farmService.getFarmById(this.farm.id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

  public getGlebesFromFarm() {
    this.getFarmById();
    console.log(this.farm);
  }

  public setGlebeId(glebeId: string){
    this.currentGlebeIdEdit = glebeId;
    console.log("idGlebe", this.currentGlebeIdEdit);
  }

  public setGlebeIdDeletion(glebeId: string){
    this.currentGlebeId = glebeId;
    console.log("idGlebe", this.currentGlebeId);
  }

}
