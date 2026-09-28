import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrekBatchManagementComponent } from './trek-batch-management.component';

describe('TrekBatchManagementComponent', () => {
  let component: TrekBatchManagementComponent;
  let fixture: ComponentFixture<TrekBatchManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekBatchManagementComponent ],
      imports: [.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrekBatchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
