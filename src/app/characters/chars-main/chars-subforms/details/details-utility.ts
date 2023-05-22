export const detailsUtil: Array<any> = [
  {meret: "w50", fejlec: 'Teljes név', fcName:'teljesnev', tipus: 'text', megjegyzes: 'Amit a sírodra vésnek, ha kisimultak az intenzív vonalaid...'},
  {meret: "w50", fejlec: 'DNS', fcName:'dns', tipus: 'select', megjegyzes:'Nem faj! Legfeljebb fajta te rasszista állat!'},
  {meret: "w50", fejlec: 'Becenév', fcName:'becenev', tipus: 'text', megjegyzes: 'Ahogy a haverok ismernek, már ha még élnek...'},
  {meret: "w50", fejlec: 'Nem', fcName:'nem', tipus: 'inpselect', megjegyzes:'Nem? De! Vagy mit tudom én!?'},
  {meret: "w50", fejlec: 'Álnév', fcName:'alnev', tipus: 'text', megjegyzes: 'Az alvilágban jobb, ha csak ezt ismerik...'},
  {meret: "w50", fejlec: 'Anyanyelv', fcName:'anyanyelv', tipus: 'inpselect', megjegyzes:'Kezdj el csicseregni, de ha kitolod, levágjuk...'},
  {meret: "w50", fejlec: 'Életkor', fcName:'eletkor', tipus: 'number', megjegyzes: 'Ezért a vénségért mennyit kapni a rabszolgapiacon?', egyseg: ' év', lepes: 10},
  {meret: "w50", fejlec: 'Testsúly', fcName:'testsuly', tipus: 'number', megjegyzes: 'Szerinted lecsontozva mennyit ér a húsod?', egyseg: ' kg', lepes: 10},
  {meret: "w50", fejlec: 'Magasság', fcName:'magassag', tipus: 'number', megjegyzes: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.', egyseg: ' cm', lepes: 10},
  {meret: "w50", fejlec: 'Testalkat', fcName:'testalkat', tipus: 'text', megjegyzes: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!'},
  {meret: "w50", fejlec: 'Kedv. szín', fcName:'kedvencszin', tipus: 'color', megjegyzes: 'Mi a kedvenc színed? Barna? Nem, a kékááá...'},
  {meret: "w50", fejlec: 'Hajstílus', fcName:'hajstilus', tipus: 'text', megjegyzes: 'Az Árnyak között is fontos a jó megjelenés!'},
  {meret: "w50", fejlec: 'Hajszín', fcName:'hajszin', tipus: 'color', megjegyzes: 'Milyet szeretnél? Van egyáltalán saját hajad?'},
  {meret: "w50", fejlec: 'Bőrszín', fcName:'borszin', tipus: 'color', megjegyzes: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.'},
  {meret: "w50", fejlec: 'Szemszín', fcName:'szemszin', tipus: 'color', megjegyzes: 'Kék a szeme, arca csupa derű...'},
  {meret: "w50", fejlec: 'Szőrzet', fcName:'szorszin', tipus: 'color', megjegyzes: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?'},
  {meret: "w50", fejlec: 'Félelem', fcName:'felelem', tipus: 'text', megjegyzes: 'Mindenki fél valamitől...'},
  {meret: "w50", fejlec: 'Ösztönző', fcName:'osztonzo', tipus: 'text', megjegyzes: 'De van, ami képes bátorítani!'},
  {meret: "w50", fejlec: 'Gyűlölet', fcName:'gyulolet', tipus: 'text', megjegyzes: 'Ne a gyűlölet vezéreljen...'},
  {meret: "w50", fejlec: 'Kedvenc', fcName:'kedvenc', tipus: 'text', megjegyzes: 'Hanem az, ami boldoggá tesz!'},
  {meret: "w50", fejlec: 'Írtózat', fcName:'irtozat', tipus: 'text', megjegyzes: 'Lehet, hogy valamitől kifordul a beled...'},
  {meret: "w50", fejlec: 'Vonzalom', fcName:'vonzalom', tipus: 'text', megjegyzes: 'De ennek te sem tudsz ellenállni!'},
  {meret: "w100", fejlec: 'Egyéb jellemzők, megjelenés', fcName:'megjelenes', tipus: 'text', megjegyzes: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)'},
  {meret: "w100", fejlec: 'Különleges képességek', fcName:'kepessegek', tipus: 'kepessegek'},
];

export const dnsUtil: Array<any> = [
  {
    dns: 'Ember',
    kockatartalek: 8,
    defHeight: "Férfi: 180 cm, Átlag: 173 cm, Nő: 166 cm",
    defWieght: "Férfi: 86 kg, Átlag: 78 kg, Nő: 70 kg",
    defAge: "Javasolt: 25 év, Várható: 65(F) / 75(N) év, Maximális: 110 év",
    defKepessegek: ['+2 Kockatartalék'],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Tünde',
    fizGyo: 7,
    asztEro: 8,
    defHeight: "Férfi: 186 cm, Átlag: 180 cm, Nő: 174 cm",
    defWieght: "Férfi: 80 kg, Átlag: 73 kg, Nő: 66 kg",
    defAge: "Javasolt: 35 év, Várható: 75(F) / 85(N) év, Maximális: 150 év",
    defKepessegek: ['Éjszakai látás'],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Törpe',
    fizEro: 8,
    fizGyo: 5,
    fizAll: 7,
    asztAll: 7,
    defHeight: "Férfi: 137 cm, Átlag: 130 cm, Nő: 123 cm",
    defWieght: "Férfi: 60 kg, Átlag: 54 kg, Nő: 48 kg",
    defAge: "Javasolt: 35 év, Várható: 70(F) / 80(N) év, Maximális: kb. 130 év",
    defKepessegek: [
      'Hőlátás',
      '-1 Elérés',
      '+1 Test Méreg ellen',
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Ork',
    fizEro: 8,
    fizAll: 8,
    asztEro: 5,
    defHeight: "Férfi: 200 cm, Átlag: 190 cm, Nő: 180 cm",
    defWieght: "Férfi: 135 kg, Átlag: 123 kg, Nő: 111 kg",
    defAge: "Javasolt: 20 év, Várható: 55(F) / 65(N) év, Maximális: kb. 90 év",
    defKepessegek: [
      'Éjszakai látás',
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Troll',
    fizEro: 9,
    fizUgy: 5,
    fizAll: 9,
    asztEro: 5,
    defHeight: "Férfi: 262 cm, Átlag: 250 cm, Nő: 238 cm",
    defWieght: "Férfi: 300 kg, Átlag: 270 kg, Nő: 240 kg",
    defAge: "Javasolt: 30 év, Várható: 55(F) / 65(N) év, Maximális: kb. 100 év",
    defKepessegek: [
      'Hőlátás',
      '+1 Elérés',
      '+1 Test Sérülés ellen',
    ],
    szorzoRuhazat: 1.2,
    szorzoEletvitel: 1.2,
  },
];

export const nemekUtil: Array<any> = [
  'Nő',
  'Férfi',
  'Mindkettő',
  'Egyiksem',
];

export const nyelvekUtil: Array<any> = [
  'magyar',
  'angol',
  'francia',
  'orosz',
  'japán',
  'kínai',
  'indiai',
];

export const Hagyomanyok: Array<any> = [
  {text: 'Inaktív'},
  {text: 'Hermetikus'},
  {text: 'Fizikai Adeptus'},
  {text: 'Misztikus Adeptus'},
  {text: 'Aligátor Sámán'},
  {text: 'Bagoly Sámán'},
  {text: 'Medve Sámán'},
  {text: 'Bölény Sámán'},
  {text: 'Cápa Sámán'},
  {text: 'Delfin Sámán'},
  {text: 'Egér Sámán'},
  {text: 'Farkas Sámán'},
  {text: 'Holló Sámán'},
  {text: 'Kígyó Sámán'},
  {text: 'Kutya Sámán'},
  {text: 'Macska Sámán'},
  {text: 'Mosómedve Sámán'},
  {text: 'Oroszlán Sámán'},
  {text: 'Patkány Sámán'},
  {text: 'Prérifarkas Sámán'},
  {text: 'Sas Sámán'},
];
