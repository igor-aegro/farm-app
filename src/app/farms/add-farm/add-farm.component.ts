import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { FarmListComponent } from '../farm-list/farm-list.component';
import { FarmListService } from '../farm-list/farm-list.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {
  farms!:Farm[];

  constructor(private farmService: FarmService,
    private farmListService: FarmListService,
    private router: Router) { }

  ngOnInit(): void {
    this.farms = this.farmListService.getFarms();
    this.farmListService.farmsChanged
    .subscribe(
      (farms:Farm[]) => {
        this.farms = farms;
      }
    )
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        console.log(response);
        this.farms = this.farmListService.getFarms();
      }
    )
  }

}
