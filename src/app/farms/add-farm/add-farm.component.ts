import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { FarmListComponent } from '../farm-list/farm-list.component';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {
  farms!:Farm[];
  farm!:Farm;
  farmsChanged = new EventEmitter<Farm[]>();

  constructor(private farmService: FarmService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFarms();
  }

  onSubmit(form: NgForm){
    console.log(form);
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
    return this.farms;
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        console.log(response);
        // this.farms.push(addForm.value);
        // this.farmsChanged.emit(this.farms);
        // console.log(this.farms);
        this.goToFarmList();
      }
    )
  }

  goToFarmList() {
    this.router.navigate(['']);
  }

}
