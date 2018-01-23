import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  
  users: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider) {
  }

  ionViewDidLoad() {
    this.user.listarUsuarios()
	.subscribe(
		(data) =>{
			this.users = data['course'];
		},
		(error) =>{
			console.error(error);
		}
	)
  }

}
