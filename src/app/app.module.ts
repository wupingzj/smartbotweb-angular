import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '../polyfills';
import 'hammerjs';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntentComponent } from './intent/intent.component';
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

// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IntentComponent,

    // use routingComponents instead
    // DepartmentListComponent,
    // EmployeeListComponent
    routingComponents,

    GlobalHeaderComponent,

    MainNavComponent,

    IntentActionComponent
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
