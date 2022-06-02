import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {
  @Input() farmIdEdit = '';
  @Output() farmEvent = new EventEmitter<any>();
  @Output() farmEditEvent = new EventEmitter<any>();

  farm: Farm = {
    id:'',
    name:'',
    glebes:[],
    productivity:0
  };

  constructor(private farmService: FarmService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  public getFarmById(id: string) {
    this.farmService.getFarmById(id).subscribe({
      next: (response: Farm) => {
        this.farm = response;
        console.log("Edit response farm", response),
        console.log("Edit farm", this.farm)
      },
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    addForm.value['glebes'] = [];
    addForm.value['productivity'] = 0;
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        console.log(addForm.value);
        this.farmEvent.emit();
      }
    )
  }

  onUpdateFarm(editForm: NgForm): void {
    this.getFarmById(this.farmIdEdit);
    setTimeout(() => {
      console.log("Farm to edit:", this.farm);
      editForm.value['id'] = this.farmIdEdit;
      editForm.value['glebes'] = this.farm.glebes;
      editForm.value['productivity'] = this.farm.productivity;
      console.log("form:", editForm.value);
      this.farmService.updateFarm(editForm.value).subscribe({
        next: (response: Farm) => this.farmEvent.emit(),
        error: (error: HttpErrorResponse) => alert(error.message)
      })
    }, 200);
    document.getElementById("close-edit-farm-btn")?.click();
  }

}
