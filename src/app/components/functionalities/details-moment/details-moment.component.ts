import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

import { MomentsService } from 'src/app/services/moments.service';

import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment.development';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Comments } from 'src/app/Comments';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-details-moment',
  templateUrl: './details-moment.component.html',
  styleUrls: ['./details-moment.component.css'],
})
export class DetailsMomentComponent implements OnInit {
  faEdit = faEdit;
  faTimes = faTimes;

  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;
  commentForm!: FormGroup;

  constructor(
    private momentsService: MomentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentsService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  delMoment() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.momentsService.deleteMoment(id).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comments = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentsService
      .createComment(data)
      .subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.commentForm.reset();

    formDirective.resetForm();
  }
}
