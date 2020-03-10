import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
  sources;
  term = ''

  constructor(private newsService: NewsService, private storage: Storage) { }

  ngOnInit() {
    this.newsService.getData('/sources?language=en').subscribe(data => {
      this.sources = data['sources'];
      console.log('FETCHED SOURCES', data)
    })
  }

  favorite(source) {
    this.storage.get('favorite').then(val => {
      let items = [];
      if( val != null) {
        items= JSON.parse(val)
      }
      items.push(source)
      this.storage.set('favorite', JSON.stringify(items))
    })
    console.log(source)
  }

  share(source) {

  }

}
