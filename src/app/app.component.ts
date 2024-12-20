import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { FilterComponent } from "./components/filter/filter.component";
import { UsersListComponent } from './components/users-list/users-list.component';
import { IUser } from './interfaces/user/user.interface';
import { CommonModule } from '@angular/common';
import { UsersList } from './data/user-list';
import { IFilterOptions } from './interfaces/filter.option.interface';
import { isWithinInterval } from 'date-fns'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    UserDatailsComponent,
    UsersListComponent,
    FilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 1)
  }

  usersList: IUser[] = [];
  userListFiltered: IUser[] = []
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
    this.userListFiltered = this.filterUserList(filterOptions, this.usersList);

  }


  filterUserList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
  }


  filterUsersListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, userLists: IUser[]): IUser[] {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATE_NOT_SELECTED) {
      return userLists;
    }

    const filteredList = userLists.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    }));

    return filteredList;
  }

}
