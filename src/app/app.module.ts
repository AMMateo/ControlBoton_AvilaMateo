import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // Importa el entorno

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({
      "apiKey":"AIzaSyBS-wsL2bfgZ7heyzWJazzG0go8tz1Sru8",
      "projectId":"proyecto1-cce80",
      "appId":"1:376547410926:web:7b59a754cff8f0570c84ff",
      "storageBucket":"proyecto1-cce80.appspot.com",      
      "authDomain":"proyecto1-cce80.firebaseapp.com",
      "messagingSenderId":"376547410926"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}