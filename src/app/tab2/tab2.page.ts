import { Component, ViewChild } from '@angular/core';
import { Article } from '../interfaces/interface';
import { NoticiasService } from '../services/noticias.service';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambiarCategoria(event){
    this.noticias=[];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string) {
    this.noticiasService.obtenerTitularesPorCategoria(categoria)
      .subscribe(res => {
        console.log('resultados:', res);
        this.noticias.push(...res.articles);
      });
  }
}
