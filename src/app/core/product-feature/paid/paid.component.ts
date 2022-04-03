import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss']
})
export class PaidComponent implements OnInit {
arrival!:any;
result!:any;
  constructor(private _notification:NotificationService) { }

  ngOnInit(): void {
     this.onPaid();
  }
onPaid(){
this._notification.getNotification().subscribe(
  (res)=>{console.log(res);
 this.result=res;
 this.arrival=this.result.arrival;
}
)
}

}
