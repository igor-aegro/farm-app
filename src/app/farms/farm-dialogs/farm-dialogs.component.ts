import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farm } from '../farm';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farm-dialogs',
  templateUrl: './farm-dialogs.component.html',
  styleUrls: ['./farm-dialogs.component.css']
})
export class FarmDialogsComponent implements OnInit {
  public farms: Farm[] = [];
  public editFarm!: Farm;

  constructor(private farmService: FarmService){}

  ngOnInit(): void {
    this.getFarms();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  public getFarms(): void {
    this.farmService.getFarms().subscribe(
      (response: Farm[]) => {
        this.farms = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        console.log(response);
        this.getFarms();
      }
    )
  }

  public onUpdateFarm(farm: Farm): void {
    this.editFarm = farm;
    console.log(farm.id);
    this.farmService.updateFarm(farm).subscribe(
      (response: Farm) => {
        console.log(response);
        this.getFarms();
      }
    );
  }

}
