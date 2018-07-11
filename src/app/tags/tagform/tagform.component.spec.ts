import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagformComponent } from './tagform.component';

describe('TagformComponent', () => {
  let component: TagformComponent;
  let fixture: ComponentFixture<TagformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
