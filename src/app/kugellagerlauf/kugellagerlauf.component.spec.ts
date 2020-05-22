import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KugellagerlaufComponent } from './kugellagerlauf.component';

describe('KugellagerlaufComponent', () => {
  let component: KugellagerlaufComponent;
  let fixture: ComponentFixture<KugellagerlaufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KugellagerlaufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KugellagerlaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
