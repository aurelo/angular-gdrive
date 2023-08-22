import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdriveComponent } from './gdrive.component';

describe('GdriveComponent', () => {
  let component: GdriveComponent;
  let fixture: ComponentFixture<GdriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdriveComponent]
    });
    fixture = TestBed.createComponent(GdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
