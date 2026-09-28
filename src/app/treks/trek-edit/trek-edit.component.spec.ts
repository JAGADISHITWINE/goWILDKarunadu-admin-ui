import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrekEditComponent } from './trek-edit.component';

describe('TrekEditComponent', () => {
  let component: TrekEditComponent;
  let fixture: ComponentFixture<TrekEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekEditComponent ],
      imports: [.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrekEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
