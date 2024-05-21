import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CharModel } from './chars-main.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillsModel } from '../chars-subforms/skills/skills.model';
import { ItemsModel } from '../chars-subforms/items/items.model';
import { AuthService } from 'src/app/authentication/auth.service';
import { AttributesService } from '../chars-subforms/attributes/attributes.service';
import { DetailsService } from '../chars-subforms/details/details.service';
import { ItemsService } from '../chars-subforms/items/items.service';
import { ResourcesService } from '../chars-subforms/resources/resources.service';
import { SkillsService } from '../chars-subforms/skills/skills.service';
import { StatusService } from '../chars-subforms/status/status.service';
import { CharsListService } from '../chars-list/chars-list.service';

const BACKEND_URL = environment.apiUrl + "/char/";

@Injectable({
  providedIn: 'root'
})
export class CharsMainService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authS: AuthService,
    private fb: FormBuilder,

    private charsListS: CharsListService,
    private detailsS: DetailsService,
    private resS: ResourcesService,
    private attrS: AttributesService,
    private statusS: StatusService,
    private skillsS: SkillsService,
    private itemsS: ItemsService,
  ) { }

  mainCharForm!: FormGroup;

  createMainForm(): void {
    this.mainCharForm = this.fb.group({
      _id: [''],
      creatorId: this.authS.getUserId(),
    });
    this.detailsS.createDetails();
    this.resS.createResources();
    this.attrS.createAttributes();
    this.statusS.createStatus();
    this.skillsS.createSkills();
    this.itemsS.createItems();
  }

  updateMainForm(w: any): void {
    this.mainCharForm = this.fb.group ({
      _id: w._id,
      creatorId: w.creatorId
    });
  }

  getOneChar(_id: string) {
    return this.http.get<{
      _id: string,
      creatorId: string,
      //szöveges
      teljesnev: string,
      becenev: string,
      alnev: string,
      testalkat: string,
      hajstilus: string,
      //értékválasztó
      nem: string,
      dns: string,
      anyanyelv: string,
      eletkor: number,
      magassag: number,
      testsuly: number,
      //szín
      szemszin: string,
      hajszin: string,
      szorszin: string,
      borszin: string,
      kedvencszin: string,
      //hosszú szöveg
      felelem: string,
      osztonzo: string,
      gyulolet: string,
      kedvenc: string,
      irtozat: string,
      vonzalom: string,
      megjelenes: string,
      //erőforrások
      alapKarma: number,
      szerzettKarma: number,
      elkoltottKarma: number,
      alapToke: number,
      szerzettToke: number,
      elkoltottToke: number,
      //fizikai
      fizEro: number,
      fizGyo: number,
      fizUgy: number,
      fizKit: number,
      //asztrál
      asztEro: number,
      asztGyo: number,
      asztUgy: number,
      asztKit: number,
      //speciális
      kockatartalek: number,
      magia: number,
      chi: number,
      cyberCapacity: number,
      //konstans
      esszencia: number,
      // állapot
      asztralisAllapot: number,
      fizikaiAllapot: number,
      pinhentsegAllapot: number,
      taplaltsagAllapot: number,
      // arrays
      skills: Array<SkillsModel>,
      items: Array<ItemsModel>
      }>(BACKEND_URL +_id);
  }

  addOneChar(
    //szöveges
    teljesnev: string,
    becenev: string,
    alnev: string,
    testalkat: string,
    hajstilus: string,
    //értékválasztó
    nem: string,
    dns: string,
    anyanyelv: string,
    eletkor: number,
    magassag: number,
    testsuly: number,
    //szín
    szemszin: string,
    hajszin: string,
    szorszin: string,
    borszin: string,
    kedvencszin: string,
    //hosszú szöveg
    felelem: string,
    osztonzo: string,
    gyulolet: string,
    kedvenc: string,
    irtozat: string,
    vonzalom: string,
    megjelenes: string,
    //erőforrások
    alapKarma: number,
    szerzettKarma: number,
    elkoltottKarma: number,
    alapToke: number,
    szerzettToke: number,
    elkoltottToke: number,
    //fizikai
    fizEro: number,
    fizGyo: number,
    fizUgy: number,
    fizKit: number,
    //asztrál
    asztEro: number,
    asztGyo: number,
    asztUgy: number,
    asztKit: number,
    //speciális
    kockatartalek: number,
    magia: number,
    chi: number,
    cyberCapacity: number,
    //konstans
    esszencia: number,
    // állapot
    asztralisAllapot: number,
    fizikaiAllapot: number,
    pinhentsegAllapot: number,
    taplaltsagAllapot: number,
    // szakértelmek
    skills: Array<SkillsModel>,
    items: Array<ItemsModel>
  ) {
    const charData:CharModel = {
      creatorId: this.authS.getUserId(),
      //szöveges
      teljesnev: teljesnev,
      becenev: becenev,
      alnev: alnev,
      testalkat: testalkat,
      hajstilus: hajstilus,
      //értékválasztó
      nem: nem,
      dns: dns,
      anyanyelv: anyanyelv,
      eletkor: eletkor,
      magassag: magassag,
      testsuly: testsuly,
      //szín
      szemszin: szemszin,
      hajszin: hajszin,
      szorszin: szorszin,
      borszin: borszin,
      kedvencszin: kedvencszin,
      //hosszú szöveg
      felelem: felelem,
      osztonzo: osztonzo,
      gyulolet: gyulolet,
      kedvenc: kedvenc,
      irtozat: irtozat,
      vonzalom: vonzalom,
      megjelenes: megjelenes,
      //erőforrások
      alapKarma: alapKarma,
      szerzettKarma: szerzettKarma,
      elkoltottKarma: elkoltottKarma,
      alapToke: alapToke,
      szerzettToke: szerzettToke,
      elkoltottToke: elkoltottToke,
      //fizikai
      fizEro: fizEro,
      fizGyo: fizGyo,
      fizUgy: fizUgy,
      fizKit: fizKit,
      //asztrál
      asztEro: asztEro,
      asztGyo: asztGyo,
      asztUgy: asztUgy,
      asztKit: asztKit,
      //speciális
      kockatartalek: kockatartalek,
      magia: magia,
      chi: chi,
      cyberCapacity: cyberCapacity,
      //konstans
      esszencia: esszencia,
      // állapot
      asztralisAllapot: asztralisAllapot,
      fizikaiAllapot: fizikaiAllapot,
      pinhentsegAllapot: pinhentsegAllapot,
      taplaltsagAllapot: taplaltsagAllapot,
      // szakértelmek
      skills: skills,
      items: items,
    };
    this.http.post(BACKEND_URL + "new", charData).subscribe(response => {
      this.router.navigate(["/charslist"]);
      console.log(response);
    });
  }

  updateOneChar(
    //szöveges
    teljesnev: string,
    becenev: string,
    alnev: string,
    testalkat: string,
    hajstilus: string,
    //értékválasztó
    nem: string,
    dns: string,
    anyanyelv: string,
    eletkor: number,
    magassag: number,
    testsuly: number,
    //szín
    szemszin: string,
    hajszin: string,
    szorszin: string,
    borszin: string,
    kedvencszin: string,
    //hosszú szöveg
    felelem: string,
    osztonzo: string,
    gyulolet: string,
    kedvenc: string,
    irtozat: string,
    vonzalom: string,
    megjelenes: string,
    //erőforrások
    alapKarma: number,
    szerzettKarma: number,
    elkoltottKarma: number,
    alapToke: number,
    szerzettToke: number,
    elkoltottToke: number,
    //fizikai
    fizEro: number,
    fizGyo: number,
    fizUgy: number,
    fizKit: number,
    //asztrál
    asztEro: number,
    asztGyo: number,
    asztUgy: number,
    asztKit: number,
    //speciális
    kockatartalek: number,
    magia: number,
    chi: number,
    cyberCapacity: number,
    //konstans
    esszencia: number,
    // állapot
    asztralisAllapot: number,
    fizikaiAllapot: number,
    pinhentsegAllapot: number,
    taplaltsagAllapot: number,
    // arrays
    skills: Array<SkillsModel>,
    items: Array<ItemsModel>,
  ) {
    let charData: CharModel;
    charData = {
      //szöveges
      teljesnev: teljesnev,
      becenev: becenev,
      alnev: alnev,
      testalkat: testalkat,
      hajstilus: hajstilus,
      //értékválasztó
      nem: nem,
      dns: dns,
      anyanyelv: anyanyelv,
      eletkor: eletkor,
      magassag: magassag,
      testsuly: testsuly,
      //szín
      szemszin: szemszin,
      hajszin: hajszin,
      szorszin: szorszin,
      borszin: borszin,
      kedvencszin: kedvencszin,
      //hosszú szöveg
      felelem: felelem,
      osztonzo: osztonzo,
      gyulolet: gyulolet,
      kedvenc: kedvenc,
      irtozat: irtozat,
      vonzalom: vonzalom,
      megjelenes: megjelenes,
      //erőforrások
      alapKarma: alapKarma,
      szerzettKarma: szerzettKarma,
      elkoltottKarma: elkoltottKarma,
      alapToke: alapToke,
      szerzettToke: szerzettToke,
      elkoltottToke: elkoltottToke,
      //fizikai
      fizEro: fizEro,
      fizGyo: fizGyo,
      fizUgy: fizUgy,
      fizKit: fizKit,
      //asztrál
      asztEro: asztEro,
      asztGyo: asztGyo,
      asztUgy: asztUgy,
      asztKit: asztKit,
      //speciális
      kockatartalek: kockatartalek,
      magia: magia,
      chi: chi,
      cyberCapacity: cyberCapacity,
      //konstans
      esszencia: esszencia,
      // állapot
      asztralisAllapot: asztralisAllapot,
      fizikaiAllapot: fizikaiAllapot,
      pinhentsegAllapot: pinhentsegAllapot,
      taplaltsagAllapot: taplaltsagAllapot,
      // arrays
      skills: skills,
      items: items
      };
      this.http
      .put(BACKEND_URL +this.mainCharForm.get('_id'), charData)
      .subscribe(response => {
        this.router.navigate(["/charslist"]);
        console.log(response);
      }
    );
  }

}
