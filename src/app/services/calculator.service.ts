import { Injectable } from '@angular/core';
import { create, all } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private math;

  constructor() {
    this.math = create(all, {
      epsilon: 1e-12,
      matrix: 'Matrix',
      number: 'number',
      precision: 64,
      predictable: false,
      randomSeed: null
    });
  }

  public solve(exp: string): string{
    return this.math.evaluate(exp);
  }

  public dec(num: string, base: number): string{
    let res: number;
    if(base == 2){
      res = parseInt(num, 2);
    }else if(base == 8){
      res = parseInt(num, 8);
    }else if(base == 16){
      res = parseInt(num, 16);
    }else{
      res = parseFloat(num);
    }
    return res + '';
  }

  public hex(num: string, base: number): string{
    let res: number;
    if(base == 2){
      res = parseInt(num, 2);
    }else if(base == 8){
      res = parseInt(num, 8);
    }else if(base == 16){
      return num;
    }else{
      res = parseFloat(num);
    }
    return res.toString(16).toUpperCase();
  }

  public oct(num: string, base: number): string{
    let res: number;
    if(base == 2){
      res = parseInt(num, 2);
    }else if(base == 10){
      res = parseFloat(num);
    }else if(base == 8){
      return num;
    }else{
      res = parseInt(num, 16);
    }
    return res.toString(8);
  }

  public bin(num: string, base: number): string{
    let res: number;
    if(base == 16){
      res = parseInt(num, 16);
    }else if(base == 10){
      res = parseFloat(num);
    }else if(base == 2){
      return num;
    }else{
      res = parseInt(num, 8);
    }
    return res.toString(2);
  }

  public sectionate(cont: string): string[]{
    let sect: string[] = [];
    let res: number;
    let ret: string[] = [];
    while(cont.length > 0){
      res = this.s1(cont, 0);
      if(res == -1){
        sect.push(cont);
        cont = '';
      }else{
        sect.push(cont.substring(0, res));
        cont = cont.substring(res, cont.length);
      }
      res = this.s2(cont, 0);
      if(res == -1){
        sect.push(cont);
        cont = '';
      }else{
        sect.push(cont.substring(0, res));
        cont = cont.substring(res, cont.length);
      }
    }
    for(let sec of sect){
      if(sec.length > 0){
        ret.push(sec);
      }
    }
    return ret;
  }

  private s1(cont: string, pos: number){
    if(cont.length == pos){
      return -1;
    }else if(cont.charAt(pos) == 'A' || cont.charAt(pos) == 'B' || cont.charAt(pos) == 'C' || cont.charAt(pos) == 'D' || cont.charAt(pos) == 'E' || cont.charAt(pos) == 'F' || cont.charAt(pos) == '1' || cont.charAt(pos) == '2' || cont.charAt(pos) == '3' || cont.charAt(pos) == '4' || cont.charAt(pos) == '5' || cont.charAt(pos) == '6' || cont.charAt(pos) == '7' || cont.charAt(pos) == '8' || cont.charAt(pos) == '9' || cont.charAt(pos) == '0'){
      return this.s1(cont, ++pos);
    }else{
      return pos;
    }
  }

  private s2(cont: string, pos: number){
    if(cont.length == pos){
      return -1;
    }else if(cont.charAt(pos) != 'A' && cont.charAt(pos) != 'B' && cont.charAt(pos) != 'C' && cont.charAt(pos) != 'D' && cont.charAt(pos) != 'E' && cont.charAt(pos) != 'F' && cont.charAt(pos) != '1' && cont.charAt(pos) != '2' && cont.charAt(pos) != '3' && cont.charAt(pos) != '4' && cont.charAt(pos) != '5' && cont.charAt(pos) != '6' && cont.charAt(pos) != '7' && cont.charAt(pos) != '8' && cont.charAt(pos) != '9' && cont.charAt(pos) != '0'){
      return this.s2(cont, ++pos);
    }else{
      return pos;
    }
  }

  public transExpression(cont: string[], origin: number, det: number){
    
  }

  public numbers(cont: string): boolean{
    let ret: boolean = true;
    for(let c of cont){
      ret = ret && (c == 'A' || c == 'B' || c == 'C' || c == 'D' || c == 'E' || c == 'F' || c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9');
    }
    return ret;
  }

  public convert(cont: string, orig: number, dest: number): string{
    let sect: string[] = this.sectionate(cont);
    for(let i = 0; i < sect.length; i++){
      if(this.numbers(sect[i])){
        if(dest == 2){
          sect[i] = this.bin(sect[i], orig);
        }else if(dest == 8){
          sect[i] = this.oct(sect[i], orig);
        }else if(dest == 10){
          sect[i] = this.dec(sect[i], orig);
        }else if(dest == 16){
          sect[i] = this.hex(sect[i], orig);
        }
      }
    }
    return sect.join('');
  }

}
