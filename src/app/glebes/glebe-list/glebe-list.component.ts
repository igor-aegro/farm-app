import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { Glebe } from 'src/app/models/glebe.model';
import { FarmService } from 'src/app/services/farm.service';
import { GlebeService } from 'src/app/services/glebe.service';

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

  glebes: Glebe[] = [];

  constructor(private farmService: FarmService,
              private glebeService: GlebeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.farm.id = this.route.snapshot.params['id'];
    
    this.farmService.getFarmById(this.farm.id).subscribe({
      next: (response: Farm) => this.farm = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })

    this.getGlebes();
  }

  public getGlebes(): Glebe[] {
    this.glebeService.getGlebes().subscribe({
      next: (response: Glebe[]) => this.glebes = response,
      error: (error: HttpErrorResponse) => alert(error.message)
    })
    return this.glebes;
  }

}
