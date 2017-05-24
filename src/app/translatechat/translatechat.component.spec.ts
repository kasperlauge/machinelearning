import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatechatComponent } from './translatechat.component';

describe('TranslatechatComponent', () => {
  let component: TranslatechatComponent;
  let fixture: ComponentFixture<TranslatechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
