import { Injectable } from '@angular/core';

import { ConfigModel } from '../model/config.model';

@Injectable({
  providedIn: 'root'
})
export class СonfigOptionsService {
  private config: ConfigModel;

  constructor() { }

  setConfig(newConfig: Partial<ConfigModel>) {
    this.config = { ...this.config, ...newConfig };
  }

  getConfig() {
    return this.config;
  }
}
