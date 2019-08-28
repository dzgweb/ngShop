import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit() {}

  onClose() {
    this.router.navigate([{ outlets: { messages: null } }]);
    this.feedbacksService.isDisplayed = false;
  }

  onSend() {
    if (this.message) {
      this.feedbacksService.addMessage(this.message);
      this.message = '';
    }
  }
}
