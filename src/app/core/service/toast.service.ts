import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
} from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class ToastService {

  public toastObject$: Subject<{}> = new Subject<{}>();
  public loaderObject$: Subject<boolean> = new Subject<boolean>();

  showSuccess(message: string): void {
    this.showToast('success', message);
  }

  showError(message: string): void {
    this.showToast('error', message);
  }

  private showToast(type: 'success' | 'error', message: string): void {
    this.toastObject$.next({
      message: message,
      type: type,
      show: true
    })
  }

  showLoader(bit: boolean){
    this.loaderObject$.next(bit);
  }

  gotoTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
}
