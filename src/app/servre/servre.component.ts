import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servre',
  templateUrl: './servre.component.html',
  styleUrls: ['./servre.component.css']
})
export class ServreComponent implements OnInit {
  
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }


  getServerStatus() {
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
