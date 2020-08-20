import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatesTableComponent } from './mates-table.component';

describe('MatesTableComponent', () => {
  let component: MatesTableComponent;
  let fixture: ComponentFixture<MatesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
