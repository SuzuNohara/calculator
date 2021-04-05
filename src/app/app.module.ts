import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { KatexModule } from 'ng-katex';
import { BasicComponent } from './modes/basic/basic.component';
import { CientificComponent } from './modes/cientific/cientific.component';
import { ProgrammerComponent } from './modes/programmer/programmer.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CientificComponent,
    ProgrammerComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    KatexModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
