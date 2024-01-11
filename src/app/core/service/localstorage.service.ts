import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, data: any): void {
    localStorage.setItem(key, data);
  }

  public getItem(key: string): any {
    return localStorage.getItem(key);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}