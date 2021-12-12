import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { Account, Product } from 'src/app/model/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  public create: boolean;
  public name: string;
  public accounts: Account[];

  constructor(private storage: StorageService, private router: Router) {
    this.create = false;
    this.name = '';
  }

  ngOnInit() {
    this.storage.get(environment.accounts).then((data: Account[]) => {
      if(data == undefined || data == null){
        this.accounts = [];
      }else{
        this.accounts = data;
      }
    });
  }

  toggleCreate(){
    this.create = !this.create;
  }

  saveAccount(){
    let acc: Account = new Account();
    acc.name = this.name;
    this.create = false;
    this.accounts.push(acc);
    this.storage.set(environment.accounts, this.accounts);
    this.name = '';
  }

  accalc(num: number){
    this.router.navigate(['/accalc'], { queryParams: { account: JSON.stringify(this.accounts[num]) } });
  }
}
