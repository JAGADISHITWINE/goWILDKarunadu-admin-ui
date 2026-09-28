import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrekAddComponent } from './trek-add.component';

describe('TrekAddComponent', () => {
  let component: TrekAddComponent;
  let fixture: ComponentFixture<TrekAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekAddComponent ],
      imports: [.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrekAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
