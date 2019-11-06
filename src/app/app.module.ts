import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '../polyfills';
import 'hammerjs';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntentComponent } from './intent/intent.component';
import { ResponseComponent } from './response/response.component';
import { GlobalHeaderComponent } from './shared/global-header/global-header.component';
import { SharedModule } from './shared/shared.module';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntentActionComponent } from './intent/intent-action/intent-action.component';
import { MaterialModule } from './shared/material/material.module';
import { UtteranceComponent } from './utterance/utterance.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IntentComponent,
    ResponseComponent,

    routingComponents,
    GlobalHeaderComponent,
    MainNavComponent,
    IntentActionComponent,
    ResponseComponent,
    UtteranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
