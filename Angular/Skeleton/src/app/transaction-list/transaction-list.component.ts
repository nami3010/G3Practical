import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactionlist: any = [];
  selectedItem: any;
  formattedDate:string='';
  constructor(private router: Router, private http: HttpClient) {
   var selectedItem;
  }
  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  ngOnInit(): void {


    this.http.get<any>('http://localhost:8000/api/transections/data') // Replace with your API endpoint
      .subscribe(data => {
        debugger;
        this.transactionlist = data.data;
      }, error => {
        console.error('API Error:', error);
      });
  }

  viewItem(item: any): void {
   var flag=true;
    console.log("item",item)
     this.selectedItem =item;
     this.formattedDate = this.formatDate(this.selectedItem.date);
    // this.router.navigate(['/transaction-view'], { queryParams: { item: JSON.stringify(item) } }); ///view/id=""
  }
}
