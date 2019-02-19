import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajetasComponent } from './tajetas.component';

describe('TajetasComponent', () => {
  let component: TajetasComponent;
  let fixture: ComponentFixture<TajetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
