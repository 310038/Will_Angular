import { Article } from './../interface/article';
import { ArticleService } from './../article.service';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [
    CommonModule,
    ArticleHeaderComponent,
    ArticleBodyComponent,
    HttpClientModule,
  ],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public articleService = inject(ArticleService);
  public articles = signal([] as Article[]);



  async ngOnInit(): Promise<void> {
    this.articles.set(await this.articleService.getArticle());

  }
}
