import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  arrContenidos: any[];
  contenido: any;

  //nos permite capturar los parametros que se envian por la ruta
  constructor( private activatedRoute: ActivatedRoute ) { 
    this.arrContenidos = [
      {
        lang: 'es',
        title: 'Hola! Bienvenido a este componente',
      },
      {
        lang: 'en',
        title: 'Hi there! Welcome to this component',
      },
      {
        lang: 'fr',
        title: 'Salut! Bienvenue dans ce composant',
      },
    ];
    this.contenido = {};
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idioma = params.language;
      console.log(idioma)
      this.contenido = this.arrContenidos.find(contenido => contenido.lang === idioma);
    });
  }

}
