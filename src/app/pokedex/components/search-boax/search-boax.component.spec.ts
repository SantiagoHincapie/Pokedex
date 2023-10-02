import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoaxComponent } from './search-boax.component';

describe('SearchBoaxComponent', () => {
  let component: SearchBoaxComponent;
  let fixture: ComponentFixture<SearchBoaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoaxComponent]
    });
    fixture = TestBed.createComponent(SearchBoaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
