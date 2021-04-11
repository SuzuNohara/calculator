import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss'],
})
export class ProgrammerComponent implements OnInit {

  public hex: string; // 1
  public dec: string; // 2
  public oct: string; // 3
  public bin: string; // 4

  public mode: number;

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

  constructor(private calc: CalculatorService) { }

  ngOnInit() {
    this.folder = 'Programmer';
    this.cont = '';
    this.equation = '';
    this.res = '';
    this.hex = '0';
    this.dec = '0';
    this.oct = '0';
    this.bin = '0';
    this.mode = 1;
  }

  public operation(oper: string){
    if(this.activeOper){
      this.result = '';
    }
    this.cont += oper;
    if(this.mode == 1){
      this.hex = this.cont;
      this.dec = this.calc.convert(this.cont, 16, 10);
      this.oct = this.calc.convert(this.cont, 16, 8);
      this.bin = this.calc.convert(this.cont, 16, 2);
    }else if(this.mode == 2){
      this.dec = this.cont;
      this.hex = this.calc.convert(this.cont, 10, 16);
      this.oct = this.calc.convert(this.cont, 10, 8);
      this.bin = this.calc.convert(this.cont, 10, 2);
    }else if(this.mode == 3){
      this.oct = this.cont;
      this.dec = this.calc.convert(this.cont, 8, 10);
      this.hex = this.calc.convert(this.cont, 8, 16);
      this.bin = this.calc.convert(this.cont, 8, 2);
    }else if(this.mode == 4){
      this.bin = this.cont;
      this.dec = this.calc.convert(this.cont, 2, 10);
      this.oct = this.calc.convert(this.cont, 2, 8);
      this.hex = this.calc.convert(this.cont, 2, 16);
    }
  }

  public solve(){
    this.activeOper = true;
    this.genBase();
    let ress = this.calc.solve(this.dec);
    if(this.mode == 1){
      this.result = this.calc.hex(ress, 10);
    }else if(this.mode == 2){
      this.result = ress;
    }else if(this.mode == 3){
      this.result = this.calc.oct(ress, 10);
    }else if(this.mode == 4){
      this.result = this.calc.bin(ress, 10);
    }
    this.previus = this.result + '';
  }

  public delete(){
    this.cont = this.cont.substr(0, this.cont.length - 1);
    this.operation('');
    this.genBase();
  }

  private genBase(){
    let sections: string[] = this.calc.sectionate(this.cont);
    for(let section of sections){
      if(this.calc.numbers(section)){

      }
    }
  }

  public cancel(){
    this.cont = '';
    this.result = '';
    this.dec = '';
    this.hex = '';
    this.oct = '';
    this.bin = '';
  }

  public changeMode(mode: number){
    this.mode = mode;
    if(this.mode == 1){
      this.cont = this.hex;
    }else if(this.mode == 2){
      this.cont = this.dec;
    }else if(this.mode == 3){
      this.cont = this.oct;
    }else{
      this.cont = this.bin;
    }
    this.solve();
  }

  public previous(){
    if(this.previus.length > 0){
      this.cont += this.previus;
    }
  }

}
