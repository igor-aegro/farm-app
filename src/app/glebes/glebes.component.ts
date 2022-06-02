import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Glebe } from '../models/glebe.model';

@Component({
  selector: 'app-glebes',
  templateUrl: './glebes.component.html',
  styleUrls: ['./glebes.component.css']
})
export class GlebesComponent implements OnInit {
  // glebe!: Glebe;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.glebe = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // }
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.glebe.id = params['id'];
    //     this.glebe.name = params['name'];
    //   }
    // )
  }

}
