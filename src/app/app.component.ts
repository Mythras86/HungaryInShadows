import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (
    private authServ: AuthService,
  ) {}

  ngOnInit(): void {
      this.authServ.autoAuthUser();
  }
}
