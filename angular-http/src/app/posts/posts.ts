import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Post } from '../modelli/post';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-posts',
  imports: [JsonPipe],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private readonly postService = inject(PostService);

  readonly post = signal<Post | null>(null);
  readonly posts = signal<Post[]>([]);
  readonly loading = signal(false);
  readonly errore = signal<string | null>(null);

  caricaUno(numero: string): void {
    this.inizia();
    this.postService.getPost(Number(numero)).subscribe({
      next: (dato) => {
        this.post.set(dato);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => this.gestisciErrore(err),
    });
  }

  private inizia(): void {
    this.loading.set(true);
    this.errore.set(null);
  }

  private gestisciErrore(err: HttpErrorResponse): void {
    this.errore.set(`Errore ${err.status}: ${err.message}`);
    this.loading.set(false);
  }
}
