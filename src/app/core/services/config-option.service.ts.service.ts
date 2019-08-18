import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

import { ConfigModel } from '../model/config.model';

@Injectable({
  providedIn: CoreModule
})
export class СonfigOptionsService {
  private config: ConfigModel = new ConfigModel();

  constructor() { }

  setConfig(newConfig: Partial<ConfigModel>) {
    this.config = { ...this.config, ...newConfig };
  }

  getConfig() {
    return this.config;
  }
}
