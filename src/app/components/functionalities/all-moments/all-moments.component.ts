import { Component, OnInit } from '@angular/core';

import { MomentsService } from 'src/app/services/moments.service';

import { environment } from 'src/environments/environment.development';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-all-moments',
  templateUrl: './all-moments.component.html',
  styleUrls: ['./all-moments.component.css'],
})
export class AllMomentsComponent implements OnInit {
  baseApiUrl = environment.baseApiUrl;
  allMoments: Moment[] = [];
  moments: Moment[] = [];

  constructor(private momentsService: MomentsService) {}

  ngOnInit(): void {
    this.momentsService.getMoments().subscribe((items) => {
      const data = items.data;
      this.moments = data;
      this.allMoments = data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      });
    });
  }

  // pesquisar por letra digitada no input
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) =>
      moment.title.toLowerCase().includes(value)
    );
  }
}
