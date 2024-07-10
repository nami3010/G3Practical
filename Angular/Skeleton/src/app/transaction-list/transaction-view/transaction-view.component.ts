import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
  selectedItem: any;
  formattedDate:string='';
  constructor(private route: ActivatedRoute) { }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        this.selectedItem = JSON.parse(params['item']);
        this.formattedDate = this.formatDate(this.selectedItem.date);
      }
    });
  }

}
