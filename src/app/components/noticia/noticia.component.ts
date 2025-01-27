import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx/index';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() i: number;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() { }

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system')
  }

}
