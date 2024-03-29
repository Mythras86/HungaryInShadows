import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { ResourcesService } from '../resources/resources.service';
import { FormArray } from '@angular/forms';
import { SelectToolService } from 'src/app/elements/modals/select-tools/select-tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(
    public toolsServ: ToolsService,
    public resServ: ResourcesService,
    public stoolServ: SelectToolService,
  ) { }

  public get tools(): FormArray | null | any {
    if(!this.toolsServ.toolsForm) {
      return null;
    }
    return this.toolsServ.toolsForm.controls['tools'] as FormArray;
  }

  getCsoportok():Array<any> {
    const form = (this.toolsServ.toolsForm.get('tools') as FormArray);
    const csoportArr = Object.values(form.controls).map(x => x.value).map(x => x.csoport);
    const csopArrUniq = [...new Set(csoportArr.map(x=> x))];
    csopArrUniq.sort();
    return csopArrUniq;
  }

  changePlace(i: number) {
    const elhelyezes = (this.toolsServ.toolsForm.get('tools') as FormArray).at(i).get('elhelyezes');

    if (elhelyezes?.value == 'raktár') {
      return elhelyezes.patchValue('táska');
    }
    if (elhelyezes?.value == 'táska') {
      return elhelyezes.patchValue('viselt')
    }
    return elhelyezes?.patchValue('raktár');
  }

  ngOnInit(): void {
  }
}
