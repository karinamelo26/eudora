import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, ProdutosComponent, ProdutoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
