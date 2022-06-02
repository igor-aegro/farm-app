import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {
  glebes = [
    {
      id: 1,
      name: 'glebeA',
      area: 0
    },
    {
      id: 2,
      name: 'glebeB',
      area: 0
    },
    {
      id: 3,
      name: 'glebeC',
      area: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
