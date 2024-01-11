import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { CustomLoaderComponent } from './shared/ui-components/custom-loader/custom-loader.component';
import { NavigationStart, Router } from '@angular/router';

const initializeAppFactory = (router: Router, http: HttpClient) =>  {
  return () =>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        "Access-Control-Allow-Methods": "POST"
    });
    'https://nvd60sc03i.execute-api.eu-west-2.amazonaws.com/Prod/donation'
    return http.get('https://lb7ksf1ujc.execute-api.us-east-1.amazonaws.com/dev/user-data').subscribe(
      (data: any) => {
        localStorage.setItem('userOrigin', data.country);
        // if(data.country == 'uk' ){
        //   router.navigate(['/unitedkingdom'])
        // }else if(data.country == 'PK' ){
        //   router.navigate(['/pakistan'])
        // }   
      }
    );
      // router.events.subscribe((event) =>{
      //   if(event instanceof NavigationStart){
      //     if(event.url.includes('uk')){
      //       router.navigate(['/unitedkingdom'])
      //     }else if(event.url.includes('pk')){
      //       router.navigate(['/pakistan'])
      //     }
      //   }
      // });
    }
}
@NgModule({
  declarations: [
    AppComponent,
    CustomLoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, LayoutModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [Router, HttpClient],
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
