import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IntentComponent } from './intent/intent.component';
import { UtteranceComponent } from './utterance/utterance.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path: 'intents', component: IntentComponent },
  { path: 'intentDetection', component: UtteranceComponent },
  { path: 'intentResponses', component: ResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IntentComponent, ResponseComponent];
