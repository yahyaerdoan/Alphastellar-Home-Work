import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { SideBarComponent } from './components/side-bars/side-bar/side-bar.component';
import { BodyComponent } from './components/bodies/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
