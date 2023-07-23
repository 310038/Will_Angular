import { ArticleService } from '../../article.service';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../../interface/article';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [NgIf,CommonModule, FormsModule],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent implements OnChanges {

  @Input() public article!: Article;

  public originalArticle!: Article; //用來把父元件的東西暫存起來

  private articleService = inject(ArticleService); //注入service

  public isEdit:boolean = false;

  public onRemove() {
    this.articleService.removeArtiicle(this.article.id);
  }

  public onSave(){
    this.articleService.updateArticle(this.article.id,this.article);
    this.isEdit = false;
  }

  public onReset(){
    this.article = Object.assign({}, this.originalArticle);
    this.isEdit = false;
  }

  ngOnChanges({article}: SimpleChanges): void { // 只for esc，只有在屬性繫結傳入資料發生改變時才會觸發 ngOnChanges() 方法
    if(article){
      this.originalArticle = article.currentValue; // originalArticle用來把父原件的位址（東西）暫存起來
      this.article = Object.assign({}, article.currentValue);
    }

  }

}
