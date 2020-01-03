import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterState } from './router.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ngxsConfig } from './ngxs.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(
      [
        RouterState,
      ], ngxsConfig),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
