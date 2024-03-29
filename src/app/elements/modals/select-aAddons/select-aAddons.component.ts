import { Component } from '@angular/core';
import { SelectAAddonService } from './select-aAddons.service';
import { SpinnerService } from '../../spinner/spinner.service';
import { Subject, Subscription} from 'rxjs';
import { SortMeService } from '../../sortme/sort-me.service';
import { AAddonsModel } from 'src/app/characters/chars-subforms/armors/armors.model';

@Component({
  selector: 'app-select-aAddons',
  templateUrl: './select-aAddons.component.html',
  styleUrls: ['./select-aAddons.component.css']
})
export class SelectAAddonsComponent {

  constructor(
    private sAAddonServ: SelectAAddonService,
    private spinServ: SpinnerService,
    private sortServ: SortMeService
  ) {}

  public moneyFilter: number = 0;
  public csoportFilter: string = '';

  public canBeClosed: boolean = true;
  closeEvent: Subject<any> = new Subject;

  loadData(modalData: any): void {
    this.moneyFilter = modalData.moneyFilter;
    this.csoportFilter = modalData.csoportFilter;
  }

  private aAddonSub!: Subscription;
  public aAddonsList: AAddonsModel[] = [];

  getFilteredAAddonsList(): Array<any> {
    const filtered = this.aAddonsList.filter(
      x=>x.ar <= this.moneyFilter && x.csoport == this.csoportFilter
      );
    this.sortServ.sortByString(filtered, 'nev');
    return filtered;
  }

  selectAAddon(_id: string) {
    const aAddon = this.aAddonsList.filter(x => x._id == _id)[0];
    this.closeEvent.next(aAddon);
    this.closeEvent.complete();
  }

  onClose() {
    this.closeEvent.next(''),
    this.closeEvent.complete()
  }

  ngOnInit(): void {
    this.spinServ.toggleSpinner(false);
    this.sAAddonServ.getAAddons();
    this.aAddonSub = this.sAAddonServ.getAAddonsUpdateListener()
    .subscribe((w: {aAddons: AAddonsModel[]}) => {
      this.spinServ.toggleSpinner(false);
      this.aAddonsList = w.aAddons;
    });
  }

}
