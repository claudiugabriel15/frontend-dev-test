import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          LoginFormComponent,
      ],
      imports: [
          FormsModule,
          BrowserAnimationsModule
      ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit empty form if no changes are made to the inputs', () => {
    spyOn(component.submitForm, 'emit');
    component.onSubmit();

    expect(component.submitForm.emit).toHaveBeenCalledWith(
      {
        username: '',
        password: ''
      }
    );
  });
});
