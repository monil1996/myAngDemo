import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/services/my.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data = [];
  cols: any[];
  showModal: boolean;
  sendingData: any;
  constructor(private service: MyService) { }

  ngOnInit() {
    this.getData();

    this.cols = [
      { field: 'userId', header: 'UserID' },
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
    ];

    this.showModal = false;

  }

  getData() {
    this.service.getData().subscribe(res => {
      this.data = res;
    });
  }

  editData(data: any) {
    this.showModal = true;
    this.sendingData = data;
  }

  childEmitter() {
    this.showModal = false;
  }


}
