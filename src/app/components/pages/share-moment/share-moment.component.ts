import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-share-moment',
  templateUrl: './share-moment.component.html',
  styleUrls: ['./share-moment.component.css'],
})
export class ShareMomentComponent {
  btnTextShare = 'Compartilhar!';

  constructor(private momentsService: MomentsService, private router: Router) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);

    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentsService.createMoment(formData).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);
  }
}
