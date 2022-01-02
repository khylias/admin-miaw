import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientItemComponent } from './client-item.component';

describe('ClientItemComponent', () => {
  let component: ClientItemComponent;
  let fixture: ComponentFixture<ClientItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
