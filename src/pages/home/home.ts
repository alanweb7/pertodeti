import { HTTP } from '@ionic-native/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private categories: any;
  private currentStyles: any;
  private canSave: any;
  private hasError: any;

  private cities: any;
  private baseUrl: string = 'https://pertodeti.com.br/api19';

  constructor(
    public navCtrl: NavController,
    public http: HTTP,
    ) {
      this.getAllCat();
      this.cities = [
        {
          id: 10,
          name: 'Ananindeua'
        },
        {
          id: 19,
          name: 'Belém'
        }
      ];

  }

  getAllCat(){
  /**
   * Sistema de retorno de informações diversas
   * Param: mode (exemplo: getCats)
   * Options: any info (ex: all, name, etc...)
   */
    let token = '39<(G+xI16HyoK8$IKh>xID.Db]<zX6T:3CEp';
      let url = this.baseUrl+"/wp-json/admin/v1/conn/getinfo";
      let data = {
        id: '1',
        mode: 'cats>citys',
      };
      let header = {Mytoken: 'Bearer '+ token};
      this.http.get(url, data, header)
    .then(data => {

      // console.log(data.status);
      // console.log(data.data); // data received by server
      // console.log(data.headers);

      let response = JSON.parse(data.data);

      this.currentStyles = {
        'font-style':  this.canSave  ? 'italic' : 'normal',
        'color':       this.hasError ? 'red'   : 'black',
        'font-size':   this.hasError ? '24px'   : '12px'
    };

      console.log('Response: ',response);
      this.categories = response.data.cats;
      this.cities = response.data.citys.cidades;
      console.log('Lista de Categorias: ',this.categories);
      console.log('Lista de Cidades: ',this.cities);

    })
    .catch(error => {

      console.log('Acionou o catch!');
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }
  openCategorie(){
    alert('Seja o primeiro a anunciar aqui! Acesse pertodeti.com.br');
  }
}
