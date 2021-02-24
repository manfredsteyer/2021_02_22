import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [{
   path: 'home',
   component: HomeComponent
}, {
   path: '',
   redirectTo: 'home',
   pathMatch: 'full'
},
{
   path: 'flight-booking',
   loadChildren: () =>
      import('./flight-booking/flight-booking.module')
         .then(m => m.FlightBookingModule)
},
{
   path: '**',
   redirectTo: 'home'
},
];

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      // FlightBookingModule, // would prevent Lazy Loading!!!
      RouterModule.forRoot(
         APP_ROUTES,
         { preloadingStrategy: PreloadAllModules })
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

