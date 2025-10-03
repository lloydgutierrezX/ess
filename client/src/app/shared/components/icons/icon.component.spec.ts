import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'lucide-icon',
  template: '',
  standalone: true,
})
class MockLucideIconComponent {
  @Input() name!: string;
  @Input() class?: string;
}

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let mockLucideIconDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent]
    })
      .overrideComponent(IconComponent, {
        set: {
          imports: [MockLucideIconComponent]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockLucideIconDebugElement = fixture.debugElement.query(By.css('lucide-icon'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the "name" input to the lucide-icon component', () => {
    component.name = 'test-icon';
    fixture.detectChanges();

    expect(mockLucideIconDebugElement.componentInstance.name).toBe('test-icon');
  });

  it('should pass the "class" input to the lucide-icon component', () => {
    component.class = 'test-class';
    fixture.detectChanges();

    expect(mockLucideIconDebugElement.componentInstance.class).toBe('test-class');
  });

  it('should pass the "ariaLabel" input to the lucide-icon component', () => {
    component.ariaLabel = 'Descriptive label';
    fixture.detectChanges();
    expect(mockLucideIconDebugElement.attributes['aria-label']).toBe('Descriptive label');
  });

  it('should generate a default "aria-label" if none is provided', () => {
    component.name = 'home';
    component.ariaLabel = undefined;
    fixture.detectChanges();
    expect(mockLucideIconDebugElement.attributes['aria-label']).toBe('home icon');
  });
});
