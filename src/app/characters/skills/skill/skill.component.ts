import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { SkillsService } from '../skills.service';
import { SkillSpecModel } from '../skills.model';
import { attributesUtil } from '../../attributes/attributes-utility';
import { AttributesService } from '../../attributes/attributes.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  constructor(
    public s: SkillsService,
    private attrsS: AttributesService,
  ) {}

  @Input() nev: string = '';
  @Input() szint: number = 0;
  @Input() kapTul: string = '';
  @Input() kapTulSzint: number = 0;

  @Input() specs: Array<SkillSpecModel> = [];

  getAttrRovid(fcName: string): string {
    const rovid = attributesUtil.filter(x=>x.fcName == fcName).map(x=>x.rovidnev)[0];
    return rovid;
  }

  getTeljesSzint(fcName: string): number {
    const fcValue = this.attrsS.getFc(fcName).value;
    const szint = Math.floor(fcValue/2);
    return szint;
  }

}