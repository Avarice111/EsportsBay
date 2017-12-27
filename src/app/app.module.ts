import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ImagessliderComponent } from './imagesslider/imagesslider.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ImagessliderComponent,
  ],
  imports: [
    BrowserModule, 
    NgxCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
