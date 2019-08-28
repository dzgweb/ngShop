import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  public isDisplayed = false;
  public buttonLabel = 'Show reviews';
  private messages: string[] = [];

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(`${message} at ${currentDate.toLocaleString()}`);
  }

  getMessages(): Array<string> {
    return this.messages;
  }
}
