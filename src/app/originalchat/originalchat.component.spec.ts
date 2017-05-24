import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalchatComponent } from './originalchat.component';

describe('OriginalchatComponent', () => {
  let component: OriginalchatComponent;
  let fixture: ComponentFixture<OriginalchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
