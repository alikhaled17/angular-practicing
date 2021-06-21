import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  isEmptyText(txt:string) {
    return txt.length == 0 || txt == null;
  }
}
