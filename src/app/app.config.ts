import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyBSmk3WMvz6dOsDNKW3QWTEwpr6NzIv1z0",
  authDomain: "dstat-e4fc5.firebaseapp.com",
  projectId: "dstat-e4fc5",
  storageBucket: "dstat-e4fc5.appspot.com",
  messagingSenderId: "265169234471",
  appId: "1:265169234471:web:ff2d86d83798aade7cfc02"
};

/*export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ],
};