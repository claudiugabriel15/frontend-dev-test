import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LogoutComponent } from './logout.component';
import { SpinnerComponent } from '../../partials/spinner/spinner.component';

import { AuthService } from 'stub';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          LogoutComponent,
          SpinnerComponent,
      ],
      imports: [
          RouterTestingModule,
          HttpClientTestingModule,
      ],
      providers: [
          AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
