import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { StatusPipe } from '../../pipes/status.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, StatusPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }

}
