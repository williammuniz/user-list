import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
}


const filterUsersListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userLists: IUser[]): IUser[] => {
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