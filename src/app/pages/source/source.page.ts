import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
  sources;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getData('/sources?language=en').subscribe(data => {
      this.sources = data['sources'];
      console.log('FETCHED SOURCES', data)
    })
  }

}
