import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlageninnenlebenComponent } from './anlageninnenleben.component';

describe('AnlageninnenlebenComponent', () => {
  let component: AnlageninnenlebenComponent;
  let fixture: ComponentFixture<AnlageninnenlebenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnlageninnenlebenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlageninnenlebenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
