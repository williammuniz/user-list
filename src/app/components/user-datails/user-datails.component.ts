import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from '../../pipes/phone.pipe';
import { AddressPipe } from '../../pipes/address.pipe';
import { StatusPipe } from '../../pipes/status.pipe';
import { CommonModule } from '@angular/common';
import { DashIfEmptyPipe } from '../../pipes/dash-if-empty.pipe';


@Component({
  selector: 'app-user-datails',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule, PhonePipe, AddressPipe, StatusPipe, DashIfEmptyPipe],
  templateUrl: './user-datails.component.html',
  styleUrl: './user-datails.component.scss'
})
export class UserDatailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser;

}
