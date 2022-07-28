import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBranchComponent } from './company-branch.component';

describe('CompanyBranchComponent', () => {
  let component: CompanyBranchComponent;
  let fixture: ComponentFixture<CompanyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
