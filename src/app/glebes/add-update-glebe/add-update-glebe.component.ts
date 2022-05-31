import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Glebe } from 'src/app/models/glebe.model';
import { GlebeService } from 'src/app/services/glebe.service';

@Component({
  selector: 'app-add-update-glebe',
  templateUrl: './add-update-glebe.component.html',
  styleUrls: ['./add-update-glebe.component.css']
})
export class AddUpdateGlebeComponent implements OnInit {
  @Input() farmId = '';
  @Output() glebeEvent = new EventEmitter<any>();
  @Input() glebeIdEdit = '';

  glebe: Glebe = {
    id:'',
    name:'',
    area:0,
    productions:[],
    productivity:0
  }

  constructor(private glebeService: GlebeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  getGlebeById(id: string){
    this.glebeService.getGlebeById(id).subscribe({
      next: (response: Glebe) => this.glebe = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

  onAddGlebe(addGlebeForm: NgForm): void {
    document.getElementById("add-glebe-btn")?.click();
    addGlebeForm.value['productivity'] = 0;
    this.glebeService.addGlebe(this.farmId, addGlebeForm.value).subscribe(
      (response: Glebe) => {
        console.log(addGlebeForm.value);
        this.glebeEvent.emit();
      }
    )
  }

  onUpdateGlebe(editGlebeForm: NgForm){
    document.getElementById("close-edit-glebe-btn")?.click();
    console.log("glebeIdEdit", this.glebeIdEdit);
    this.getGlebeById(this.glebeIdEdit);
    editGlebeForm.value['id'] = this.glebe.id;
    editGlebeForm.value['productivity'] = this.glebe.productivity;
    editGlebeForm.value['productions'] = this.glebe.productions;
    console.log("form:", editGlebeForm.value);
    this.glebeService.updateGlebe(this.farmId, this.glebeIdEdit, editGlebeForm.value).subscribe({
      next: (response: Glebe) => this.glebeEvent.emit(),
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

}
