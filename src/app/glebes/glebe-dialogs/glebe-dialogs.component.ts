import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlebeService } from 'src/app/services/glebe.service';

@Component({
  selector: 'app-glebe-dialogs',
  templateUrl: './glebe-dialogs.component.html',
  styleUrls: ['./glebe-dialogs.component.css']
})
export class GlebeDialogsComponent implements OnInit {
  @Input() farmId = '';
  @Input() glebeId = '';
  @Output() glebeDeletedEvent = new EventEmitter<any>();

  constructor(private glebeService: GlebeService) { }

  ngOnInit(): void {
  }

  onDeleteGlebe(farmId: string, glebeId: string){
    document.getElementById("close-delete-glebe-btn")?.click();
    this.glebeService.deleteGlebe(farmId, glebeId).subscribe({
      next: response => this.glebeDeletedEvent.emit(),
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

}
