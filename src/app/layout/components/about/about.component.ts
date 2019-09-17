import { Component, OnInit, Optional, Inject } from '@angular/core';

import { ConstantsService, GeneratorS, GeneratorFactoryService, GeneratorService } from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    GeneratorService,
    { provide: GeneratorS, useFactory: GeneratorFactoryService(10), deps: [GeneratorService] }
  ]
})
export class AboutComponent implements OnInit {
  contentRand: string;

  constructor(
    @Optional() @Inject(ConstantsService) public constants: object,
    @Optional() @Inject(GeneratorS) private generatorS: string
  ) { }

  ngOnInit() {
    this.contentRand = `${this.generatorS}`;
    console.log(this.constants ? `ConstantsService: ${JSON.stringify(this.constants)}` : 'ConstantsService not found.');
  }
}
