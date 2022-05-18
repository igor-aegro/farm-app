import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-edit-farm',
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.css']
})
export class EditFarmComponent implements OnInit {
  public editFarm!: Farm;

  constructor(private farmService: FarmService,
              private activeModal: NgbActiveModal){}

  ngOnInit(): void {  
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  public onUpdateFarm(farm: Farm): void {
    this.editFarm = farm;
    console.log(farm.id);
    this.farmService.updateFarm(farm).subscribe(
      (response: Farm) => {
        console.log(response);
        // this.goToFarmList();
      }
    );
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
