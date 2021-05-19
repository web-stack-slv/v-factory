import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFactoryComponent } from './v-factory.component';

describe('VFactoryComponent', () => {
  let component: VFactoryComponent;
  let fixture: ComponentFixture<VFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
