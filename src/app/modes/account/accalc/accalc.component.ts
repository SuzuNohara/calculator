import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account, Product } from 'src/app/model/account';

@Component({
  selector: 'app-accalc',
  templateUrl: './accalc.component.html',
  styleUrls: ['./accalc.component.scss'],
})
export class AccalcComponent implements OnInit {

  public account: Account;

  public creating: boolean;

  public product: Product;

  constructor(private route: ActivatedRoute) {
    this.account = new Account();
    this.creating = true;
    this.product = new Product();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.account = JSON.parse(params['account']);
    }, error => {
      console.log(error);
    });
  }

  public createProduct(){
    this.product = new Product();
  }

}
