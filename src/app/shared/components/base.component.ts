import { OnDestroy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({ template: '' })
export class BaseComponent implements OnDestroy {
  protected destroyed = new ReplaySubject<void>(1);

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
