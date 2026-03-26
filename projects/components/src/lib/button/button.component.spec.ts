import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HungryButton } from './button.component';

@Component({
  standalone: true,
  imports: [HungryButton],
  template: `
    <hungry-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [fullWidth]="fullWidth"
      (clicked)="handleClick($event)"
    >
      {{ text }}
    </hungry-button>
  `,
})
class TestHostComponent {
  text = 'Click me';
  variant: 'primary' | 'secondary' | 'ghost' | 'link' | 'danger' = 'primary';
  size: 'small' | 'medium' | 'large' = 'medium';
  disabled = false;
  loading = false;
  fullWidth = false;
  clicked = false;

  handleClick(): void {
    this.clicked = true;
  }
}

describe('HungryButton', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(
      By.css('hungry-button')
    ).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with default props', () => {
    const button = buttonElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Click me');
    expect(button?.classList).toContain('hungry-button--primary');
    expect(button?.classList).toContain('hungry-button--medium');
  });

  it('should apply variant classes', () => {
    const variants: Array<
      'primary' | 'secondary' | 'ghost' | 'link' | 'danger'
    > = ['primary', 'secondary', 'ghost', 'link', 'danger'];

    variants.forEach((variant) => {
      component.variant = variant;
      fixture.detectChanges();
      const button = buttonElement.querySelector('button');
      expect(button?.classList).toContain(`hungry-button--${variant}`);
    });
  });

  it('should apply size classes', () => {
    const sizes: Array<'small' | 'medium' | 'large'> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      component.size = size;
      fixture.detectChanges();
      const button = buttonElement.querySelector('button');
      expect(button?.classList).toContain(`hungry-button--${size}`);
    });
  });

  it('should be disabled when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    expect(button?.disabled).toBe(true);
    expect(button?.getAttribute('aria-disabled')).toBe('true');
  });

  it('should be disabled when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    expect(button?.disabled).toBe(true);
    expect(button?.getAttribute('aria-disabled')).toBe('true');
    expect(button?.getAttribute('aria-busy')).toBe('true');
  });

  it('should show loading spinner when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const loader = buttonElement.querySelector('.hungry-button__loader');
    expect(loader).toBeTruthy();
  });

  it('should emit clicked event', () => {
    const button = buttonElement.querySelector('button');
    button?.click();
    fixture.detectChanges();
    expect(component.clicked).toBe(true);
  });

  it('should not emit clicked event when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    button?.click();
    fixture.detectChanges();
    expect(component.clicked).toBe(false);
  });

  it('should not emit clicked event when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    button?.click();
    fixture.detectChanges();
    expect(component.clicked).toBe(false);
  });

  it('should apply full width class', () => {
    component.fullWidth = true;
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    expect(button?.classList).toContain('hungry-button--full-width');
  });

  it('should have unique button ID', () => {
    fixture.detectChanges();
    const button = buttonElement.querySelector('button');
    const id = button?.getAttribute('id');
    expect(id).toBeTruthy();
    expect(id?.startsWith('button-')).toBe(true);
  });

  it('should have proper ARIA attributes', () => {
    const button = buttonElement.querySelector('button');
    expect(button?.getAttribute('role')).toBe('button');
  });
});
