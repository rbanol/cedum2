import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseProvider } from '../../providers/course/course';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {
	
  courses: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public course: CourseProvider) {
  }

  ionViewDidLoad() {
    this.course.listarCursos()
	.subscribe(
		(data) =>{
			this.courses = data['results'];
		},
		(error) =>{
			console.error(error);
		}
	)
  }
  }


