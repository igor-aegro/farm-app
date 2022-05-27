import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Glebe } from 'src/app/models/glebe.model';
import { GlebeService } from 'src/app/services/glebe.service';

@Component({
  selector: 'app-add-update-glebe',
  templateUrl: './add-update-glebe.component.html',
  styleUrls: ['./add-update-glebe.component.css']
})
export class AddUpdateGlebeComponent implements OnInit {

  constructor(private glebeService: GlebeService) { }

  ngOnInit(): void {
  }

  onAddGlebe(addGlebeForm: NgForm): void {
    document.getElementById("add-glebe-btn")?.click();
    addGlebeForm.value['area'] = 0;
    addGlebeForm.value['productivity'] = 0;
    this.glebeService.addGlebe('SOMEID', addGlebeForm.value).subscribe(
      (response: Glebe) => {
        console.log(addGlebeForm.value);
        // this.glebeEvent.emit();
      }
    )
  }

}
