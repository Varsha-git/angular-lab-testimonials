import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,

    BodyComponent,

    NavbarComponent,

    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
