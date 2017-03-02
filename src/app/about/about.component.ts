import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
  msg : string;
  items: FirebaseListObservable<any[]>; // List of array of type any

  constructor(private af: AngularFire) {
    this.msg = "About Page";
     this.items = af.database.list('/Users'); // Pass in the node where we wold like to retrieve the list from (Node on firebase console)
   }
  ngOnInit() {
  }

}

