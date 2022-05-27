import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {
  farm: Farm = {
    id:'',
    name:'',
    glebes:[],
    productivity:0
  }

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

  constructor(private farmService: FarmService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.farm.id = this.route.snapshot.params['id'];
    
    this.farmService.getFarmById(this.farm.id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

}
