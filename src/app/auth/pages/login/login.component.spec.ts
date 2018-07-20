import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './../../partials/login-form/login-form.component';

import { AuthService } from 'stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          LoginComponent,
          LoginFormComponent
      ],
      providers: [
          AuthService,
      ],
      imports: [
          RouterTestingModule,
          FormsModule,
          HttpClientTestingModule,
          BrowserAnimationsModule,
      ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
