import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { create, all } from 'mathjs';
import { KatexModule } from 'ng-katex';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public equation: string;
  public folder: string;
  public cont: string;
  private math = create(all, {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
  });

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.cont = '';
    this.equation = '14+22';
  }

  public memory(memory: string){

  }

  public numbers(num: number){
    this.cont += '' + num;
  }

  public operation(oper: string){
    switch(oper){
      case 'CE':
        this.cont = '';
        break;
      case 'C':
        this.cont = '';
        break;
      case 'DEL':
        if(this.cont.length){
          this.cont = this.cont.substr(0, this.cont.length - 1);
        }
        break;
      default:
        this.cont += oper;
        break;
    }
  }

  public result(){
    this.cont = this.math.evaluate(this.cont);
  }

}
