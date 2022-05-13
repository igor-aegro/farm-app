import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Farm } from './farm';
import { FarmService } from './farm.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  public farms!: Farm[];
  public editFarm!: Farm;

  constructor(private farmService: FarmService){}

  ngOnInit() {
      this.getFarms();
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

  // onAddFarm(addForm: NgForm): void {
  //   document.getElementById("add-farm-btn")?.click();
  //   this.farmService.addFarm(addForm.value).subscribe(
  //     (response: Farm) => {
  //       console.log(response);
  //       this.getFarms();
  //     }
  //   )
  // }

  // public onUpdateFarm(farm: Farm): void {
  //   this.editFarm = farm;
  //   this.farmService.updateFarm(farm).subscribe(
  //     (response: Farm) => {
  //       console.log(response);
  //       // this.getFarms();
  //     }
  //   );
  // }

}
