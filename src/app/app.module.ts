import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { ServicesComponent } from '../app/services/services.component';
import { ToolsComponent } from '../app/tools/tools.component';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { BlueColoredDirective } from './blue-colored.directive';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'portfolio',
      component: PortfolioComponent
  },
  {
      path: 'tools',
      component: ToolsComponent
  },
  {
      path: 'services',
      component: ServicesComponent
  }
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    ToolsComponent,
    HeaderComponent,
    FooterComponent,
    BlueColoredDirective,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
