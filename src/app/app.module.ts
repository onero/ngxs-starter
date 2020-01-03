import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterState } from './router.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ngxsConfig } from './ngxs.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgxsModule.forRoot(
      [
        RouterState,
      ], ngxsConfig),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
