import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IUser } from '../interfaces/user-interface';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectUser() {
    this.select.emit(this.user.id);
  }
}
