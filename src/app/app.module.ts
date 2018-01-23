import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PoliticaPage } from '../pages/politica/politica';
import { EntrarPage } from '../pages/entrar/entrar';
import { TerminosPage } from '../pages/terminos/terminos';
import { RecordarPage } from '../pages/recordar/recordar';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { CursosPage } from '../pages/cursos/cursos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { CourseProvider } from '../providers/course/course';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	PoliticaPage,
	EntrarPage,
	TerminosPage,
	RecordarPage,
	AyudaPage,
	UsuariosPage,
	CursosPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	PoliticaPage,
	EntrarPage,
	TerminosPage,
	RecordarPage,
	AyudaPage,
	UsuariosPage,
	CursosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    CourseProvider,
  ]
})
export class AppModule {}
