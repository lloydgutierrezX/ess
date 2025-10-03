import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name!: string;
  @Input() class = '';
  @Input() ariaLabel?: string;
}
