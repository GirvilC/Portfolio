import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationsListComponent } from './realisations-list.component';

describe('RealisationsListComponent', () => {
  let component: RealisationsListComponent;
  let fixture: ComponentFixture<RealisationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
