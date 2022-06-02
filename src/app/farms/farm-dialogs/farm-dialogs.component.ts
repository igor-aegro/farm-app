import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farm } from '../farm';

@Component({
  selector: 'app-farm-dialogs',
  templateUrl: './farm-dialogs.component.html',
  styleUrls: ['./farm-dialogs.component.css']
})
export class FarmDialogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }


}
