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
  @Input() farmToEditId = '';
  @Output() farmEvent = new EventEmitter<NgForm>();

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
    console.log(this.farmToEditId);
    editForm.value['id'] = this.farmToEditId;
    document.getElementById("add-farm-btn")?.click();
    this.farmService.updateFarm(editForm.value).subscribe(
      (response: Farm) => {
        console.log("Updated form:", editForm);
        this.farmEvent.emit(editForm);
      }
    )
  }

}
