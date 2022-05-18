import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { FarmListComponent } from '../farm-list/farm-list.component';

@Component({
  selector: 'app-farm-dialogs',
  templateUrl: './farm-dialogs.component.html',
  styleUrls: ['./farm-dialogs.component.css']
})
export class FarmDialogsComponent implements OnInit {
  

  constructor(private farmService: FarmService){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
