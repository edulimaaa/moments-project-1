import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { ActivatedRoute } from '@angular/router';
import { MomentsService } from 'src/app/services/moments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css'],
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnEdit = 'Editar';

  constructor(
    private activatedRoute: ActivatedRoute,
    private momentsService: MomentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentsService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id;
    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentsService.updateMoment(id!, formData).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);
  }
}
