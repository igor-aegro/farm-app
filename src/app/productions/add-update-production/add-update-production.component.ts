import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Production } from 'src/app/models/production.model';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-add-update-production',
  templateUrl: './add-update-production.component.html',
  styleUrls: ['./add-update-production.component.css']
})
export class AddUpdateProductionComponent implements OnInit {
  @Input() glebeId = '';
  @Output() productionEvent = new EventEmitter<any>();

  production: Production = {
    id: '',
    production: 0
  }

  constructor(private productionService: ProductionService) { }

  ngOnInit(): void {
  }

  onAddProduction(addProductionForm: NgForm){
    document.getElementById("close-add-production-btn")?.click();
    this.productionService.addProduction(this.glebeId, addProductionForm.value).subscribe(
      (response: Production) => {
        console.log(addProductionForm.value);
        this.productionEvent.emit();
      }
    )
  }

}
