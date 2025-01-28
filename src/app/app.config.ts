import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"angular-crud-12c12","appId":"1:816490311434:web:6044c7f4a0519a66c594f3","storageBucket":"angular-crud-12c12.firebasestorage.app","apiKey":"AIzaSyBYx3KpjyNQ1MSNtPpt2rF3WLfgbR5Cv3w","authDomain":"angular-crud-12c12.firebaseapp.com","messagingSenderId":"816490311434"})), provideFirestore(() => getFirestore())]
};
