import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaexercModule } from './listaexerc/listaexerc-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ListaexercModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
