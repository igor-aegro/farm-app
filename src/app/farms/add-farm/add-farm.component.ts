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
  @Output() farmNameEvent = new EventEmitter<string>();

  constructor(private farmService: FarmService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onAddFarm(addForm: NgForm): void {
    document.getElementById("add-farm-btn")?.click();
    this.farmService.addFarm(addForm.value).subscribe(
      (response: Farm) => {
        this.farmNameEvent.emit(addForm.value['name']);
      }
    )
  }

}
