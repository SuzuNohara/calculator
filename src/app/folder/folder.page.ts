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
  
  private previus: string = '';
  private activeOper: boolean = false;
  public units: boolean = false;
  public shiftB: boolean = false;
  public result: string  = '';
  private actBrack: number = 0;
  public equation: string;
  public res: string;
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
    this.equation = '';
    this.res = '';
  }

  public memory(memory: string){

  }

  public numbers(num: number){
    this.cont += '' + num;
  }

  public operation(oper: string){
    if(this.activeOper){
      this.result = '';
    }
    if(this.actBrack > 0){
      this.cont = this.cont.substr( 0, this.cont.length - this.actBrack) + oper + '}';
    }else{
      this.cont += oper;
    }
  }

  private expressionTranslate(){
    let temp: string = this.cont;
    /*console.log(temp);
    temp = temp.replace('[ln]','\\ln');
    temp = temp.replace('[exp]','e');
    console.log(temp);*/
    this.equation = temp;
  }

  public solve(){
    this.activeOper = true;
    this.result = this.math.evaluate(this.cont);
    this.previus = this.result + '';
  }

  public saveAsImage(){
    // not implemented
  }

  public expandMode(){
    
  }

  public history(){

  }

  public delete(){
    this.cont = this.cont.substr(0, this.cont.length - 1);
  }

  public cancel(){
    this.cont = '';
    this.result = '';
  }

  public previous(){
    if(this.previus.length > 0){
      this.cont += this.previus;
    }
  }

  public shift(){
    this.shiftB = !this.shiftB;
  }

  public unitsC(){
    this.units = !this.units;
  }

}
