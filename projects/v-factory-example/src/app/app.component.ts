import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer: MatSidenav;
  iconName = 'menu';
  opened: boolean;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) { 
    this.isHandset$
    .subscribe(value => {
      this.opened = value === false;
    }); 
  }

  ngOnInit(): void {
  }

  toggle() {
    this.drawer.toggle();
    this.iconName = this.iconName === 'clear' ? 'menu' : 'clear';
  }
}
