import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PoliticaPage } from '../pages/politica/politica';
import { EntrarPage } from '../pages/entrar/entrar';
import { TerminosPage } from '../pages/terminos/terminos';
import { RecordarPage } from '../pages/recordar/recordar';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { CursosPage } from '../pages/cursos/cursos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
	  { title: 'Política de privacidad', component: PoliticaPage },
	  { title: 'Entrar', component: EntrarPage },
	  { title: 'Términos de uso', component: TerminosPage },
	  { title: 'Recordar contraseña', component: RecordarPage },
	  { title: 'Ayuda', component: AyudaPage },
	  { title: 'Usuarios', component: UsuariosPage },
	  { title: 'Mis cursos', component: CursosPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
