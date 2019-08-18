import { Component, OnInit, Optional } from '@angular/core';

import { СonfigOptionsService } from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private configService: СonfigOptionsService
  ) { }

  ngOnInit() {
  }

}
