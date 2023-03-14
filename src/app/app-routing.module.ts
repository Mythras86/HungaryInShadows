import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./authentication/auth.guard";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CharsListComponent } from "./characters/chars-list/chars-list.component";
import { CharsMainComponent } from "./characters/chars-main/chars-main.component";
import { SpinnerComponent } from "./elements/spinner/spinner.component";
import { MainComponent } from "./main/main.component";


const routes: Routes = [
  { path: "", component: MainComponent, title: "Főoldal" },
  { path: "auth", component: AuthenticationComponent, title: "Azonosítás"},

  { path: "charslist", component: CharsListComponent, title: "Karakterlista"},
  { path: "charsheet", component: CharsMainComponent, title: "Karakterlap", canActivate: [AuthGuard]},
  { path: "editchar/:charID", component: CharsMainComponent, title: "Karakter szerkesztés", canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
