import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  //@Input() é para dizer que essa varial será recebida pelo componente pai
  @Input() textoBotao: string;
  @Input() size: string;
}
