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
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<any>('http://localhost:8000/api/transections/data') // Replace with your API endpoint
      .subscribe(data => {
        debugger;
        this.transactionlist = data.data;
      }, error => {
        console.error('API Error:', error);
      });
  }

  // Method to format timestamp to DD/MM/YYYY
  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  viewItem(item: any): void {
    this.router.navigate(['/transaction-view'], { queryParams: { item: JSON.stringify(item) } });
  }
}
