import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';
import { AttributesService } from '../attributes/attributes.service';
import { DetailsService } from '../details/details.service';
import { ArmorsService } from '../armors/armors.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private statServ: StatusService,
    public attrServ: AttributesService,
    public detailsServ: DetailsService,
    public armorsServ: ArmorsService,
  ) {}

  toggleKockaMColor(fcName: string, i:number):string {
    if(i == 4 && this.getFcValue(fcName) == i) {
      return 'ngrn'
    }
    if(i == 3 && this.getFcValue(fcName) == i) {
      return 'nbl'
    }
    if(i == 2 && this.getFcValue(fcName) == i) {
      return 'nyllw'
    }
    if(i == 1 && this.getFcValue(fcName) == i) {
      return 'nrng'
    }
    if(i == 0 && this.getFcValue(fcName) == i) {
      return 'nrd'
    }
    return 'grayCell';
  }

  sendStatus(fcName: string, i: number) {
    const sendStatus = this.statServ.statusForm.get(fcName)?.patchValue(i);
    return sendStatus;
  }

  getFcValue(fcName: string): number {
    return this.statServ.statusForm.get(fcName)?.value;
  }

  toggleColor(fcName: string, i: number):string {
    if(this.getFcValue(fcName) <= i) {
      return 'nrd';
    }
    return 'ngrn';
  }

  getModosito(i: number): number {
    const terheles = Math.floor(11-i-(11-i)/2-1);
    if (terheles < 0) {
      return 0;
    }
    return terheles;
  }

  getMaxMod(astral: string, body: string): number {
    const asztral = this.getFcValue(astral);
    const fizikum = this.getFcValue(body);
    if (asztral < fizikum) {
      return asztral;
    }
    return fizikum;
  }

  getAkcio(): number {
    const gyo = this.attrServ.getTulErtek('fizGyo');
    const int = this.attrServ.getTulErtek('asztGyo');
    const akcio = Math.floor((gyo+int)/2);
    return akcio;
  }

  getPusztakez():string {
    const ero = this.attrServ.getTulErtek('fizEro');
    const gyo = this.attrServ.getTulErtek('fizGyo');
    const ugy = this.attrServ.getTulErtek('fizUgy');
    const tamEro = Math.round((ero + gyo + ugy)/3+this.getMeretkateg());
    return '3AP / '+tamEro +'('+3+' K)';
  }

  getMeretkateg():number {
    return this.detailsServ.getFc('magassag')?.value/100;
  }

  ngOnInit(): void {
    this.statServ.createStatus();
  }

}
