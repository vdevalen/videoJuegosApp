import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }

  getLocalStorage(key: string){
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  removeLocalStorage(key: string){
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  clearLocalStorage(){
    try {
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
}
