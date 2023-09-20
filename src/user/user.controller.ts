import { User } from './User';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        // is the username empty ?
        if(username.length === 0) throw new Error('Username cannot be empty');
        // is the username whitespaced ?
        if(username.search(/\s/) !== -1) throw new Error('Username cannot contain whitespaces');
        // other checks...
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        // is the id a decimal ?
        if(id % 1 !== 0) throw new Error('Id must be a decimal');
        // is the id a negative number ?
        if(id < 0) throw new Error('Id must be a positive number');
        // other checks...
        return this.userService.getById(id);
    }
}
