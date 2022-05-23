import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-edit-farm',
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.css']
})
export class EditFarmComponent implements OnInit {
  @Input() farm!: Farm;
  @Output() passEntry: EventEmitter<Farm> = new EventEmitter();

  constructor(private farmService: FarmService,
              private activeModal: NgbActiveModal,
              private route: ActivatedRoute){}

  ngOnInit() {
    // console.log(this.farm); 
  }

  onSubmit(form: NgForm){
    // console.log(form);
  }

  public onUpdateFarm(farm: Farm): void {
    this.farmService.updateFarm(farm).subscribe(
      (response: Farm) => {
        this.farm = response;
        console.log(response);
      }
    );
  }

  saveEdition(farmData: Farm) {
    this.farm.name = farmData.name;
    console.log(farmData.name);
    console.log("Updated farm:")
    console.log(this.farm);
    this.onUpdateFarm(this.farm);
    this.passEntry.emit(this.farm);
    this.activeModal.close('this.farm');
  }

  closeEditModal() {
    this.activeModal.close('Edit modal closed');
  }

}
