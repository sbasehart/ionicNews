import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
  news;
  id;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.newsService.getData(`everything?sources=${this.id}`).subscribe(data => {
      this.news = data;
      console.log(`FETCHED news from ${this.id}`, data)
    })
  }

}
