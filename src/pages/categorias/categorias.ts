import { API_CONFIG } from './../../Config/api.config';
import { CategoriaDTO } from './../../models/categotia.dto';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items : CategoriaDTO[];
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public CategoriaService: CategoriaService){
  }



  ionViewDidLoad() {
    this.CategoriaService.findAll()
      .subscribe(
        response => {
          this.items = response;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

}
