import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../article.service';
import { Article } from '../../interface/article';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss'],
})
export class ArticleBodyComponent {
  @Input() public article: Article={} as Article;
  public originalArticle: Article={} as Article;

  private articleService = inject(ArticleService);

}

