import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadlinePage } from './headline.page';

describe('HeadlinePage', () => {
  let component: HeadlinePage;
  let fixture: ComponentFixture<HeadlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
