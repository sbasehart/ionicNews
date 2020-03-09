import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
  news: any

  constructor(private newsService: NewsService,) { }

  ngOnInit() {
    this.newsService.getData('/sources?language=en&country=us').subscribe(data => {
      this.news = data;
      console.log('FETCHED SOURCES', data)
    })
  }
}
