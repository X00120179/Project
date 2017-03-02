import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  msg : string;
  items: FirebaseListObservable<any[]>; // List of array of type any

    constructor(private af: AngularFire) {
      this.items = af.database.list('/Items'); // Pass in the node where we wold like to retrieve the list from (Node on firebase console)
      this.msg = "Products Page";
  }


  


  ngOnInit() {
  }

}
