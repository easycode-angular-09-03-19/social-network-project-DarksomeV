import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data;
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
}
