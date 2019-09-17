import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbacksService } from '../../../core';

@Component({
  selector: 'app-messages',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  message = '';

  constructor(
    public feedbacksService: FeedbacksService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {}

  onClose() {
    this.router.navigate([{ outlets: { feedbacks: null } }], {
      relativeTo: this.route
    });
    console.log('close');
    this.feedbacksService.isDisplayed = false;
  }

  onSend() {
    if (this.message) {
      this.feedbacksService.addMessage(this.message);
      this.message = '';
    }
  }
}
