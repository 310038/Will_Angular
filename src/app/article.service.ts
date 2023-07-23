import { Injectable, Signal, inject, signal } from '@angular/core';
import { Article } from './interface/article';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  //不要把signal寫在service中
  private http: HttpClient=inject(HttpClient);
  // private articles = signal([] as Article[]);

  private webApiUrl = 'http://localhost:3000/articles';

  async getArticle() {
    const get$ = this.http.get<Article[]>(this.webApiUrl);
    return await lastValueFrom(get$);
  }

  removeArtiicle(id: number) {
    const deleteResult$ = this.http.delete(`http://localhost:3000/articles/${id}`);
    return lastValueFrom(deleteResult$);
  }

  updateArticle(id: number, article: Article) {
    const updateResult$ = this.http.put(`http://localhost:3000/articles/${id}`, article);
    return lastValueFrom(updateResult$);
  }

  // public getArticle():Signal<Article[]> {
  //   this.http.get<Article[]>(this.webApiUrl).subscribe(x => this.articles.set(x));
  //   return this.articles;
  // }
  // public removeArtiicle(id: number): void {
  //   this.http.delete(`http://localhost:3000/articles/${id}`).subscribe(() => this.getArticle());

  // }

  // public updateArticle(id: number, article: Article): void {
  //   this.http.put(`http://localhost:3000/articles/${id}`, article).subscribe(() => this.getArticle());
  // }


}
