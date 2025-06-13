import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';

describe('LifecycleHooksComponent', () => {
  let component: LifecycleHooksComponent;
  let fixture: ComponentFixture<LifecycleHooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleHooksComponent]
    });

    fixture = TestBed.createComponent(LifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default message', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Lifecycle Hooks Component');
  });
});