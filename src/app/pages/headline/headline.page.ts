import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.page.html',
  styleUrls: ['./headline.page.scss'],
})
export class HeadlinePage implements OnInit {
  @ViewChild('mySlider', {static: true}) slider: IonSlides;
    sliderOpts = {
        autoplay: true,
        speed: 500,
      };

  news: any
  categories = [
    'World',
    'Business',
    'Politics',
    'Sports',
    'Entertainment',
    'Science',
    'Technology',
    'Education',
    'legal',
    'Environment',
    'Weather',
    'Travel',
    'Religion',
    'Arts',
    'Finance',
    'Health',
    // 'Government'
  ]

  constructor(private newsService: NewsService,) { }

  ngOnInit() {
    this.newsService.getData('/everything?q=headlines&language=en&from=2020-03-08&to=2020-03-08&sortBy=popularity').subscribe(data => {
      this.news = data;
      console.log('FECTHED TOP HEADLINES', data)
    })
  }

  getCategory(category) {
    this.newsService.getData(`everything?q=${category.toLowerCase()}&language=en&from=2020-03-08&to=2020-03-08&sortBy=popularity`).subscribe(data => {
      this.news = data;
      console.log('FECTHED TOP HEADLINES of', category, data)
    })
  }

}
