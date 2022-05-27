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
  @Output() farmEvent = new EventEmitter<NgForm>();
  @Output() farmEditEvent = new EventEmitter<NgForm>();

  constructor(private farmService: FarmService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    addForm.value['glebes'] = [];
    addForm.value['productivity'] = 0;
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        console.log(addForm.value);
        this.farmEvent.emit(addForm);
      }
    )
  }

  onUpdateFarm(editForm: NgForm): void {
    console.log("edit id:", this.farmIdEdit);
    editForm.value['id'] = this.farmIdEdit;
    this.farmService.updateFarm(editForm.value).subscribe({
      next: (response: Farm) => this.farmEditEvent.emit(editForm),
      error: (error: HttpErrorResponse) => alert(error.message)
  })
    document.getElementById("add-farm-btn")?.click();
  }

}
