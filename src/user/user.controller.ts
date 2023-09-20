import { User } from './User';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        try {
            // throw new Error('Not implemented yet');
            // is the username empty ?
            if(username.length === 0) throw new Error('Username cannot be empty');
            // is the username whitespaced ?
            if(username.search(/\s/) !== -1) throw new Error('Username cannot contain whitespaces');
            // other checks...
        }
        catch (error: unknown) {
            throw new Error('Username cannot be empty');
        }
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

    delete(id: number): User | null {
        // is the id a decimal ?
        if(id % 1 !== 0) throw new Error('Id must be a decimal');
        // is the id a negative number ?
        if(id < 0) throw new Error('Id must be a positive number');
        // other checks...
        return this.userService.delete(id);
    }

    update(id: number, username: string): User | null {
        // is the id a decimal ?
        if(id % 1 !== 0) throw new Error('Id must be a decimal');
        // is the id a negative number ?
        if(id < 0) throw new Error('Id must be a positive number');
        // is the username empty ?
        if(username.length === 0) throw new Error('Username cannot be empty');
        // is the username whitespaced ?
        if(username.search(/\s/) !== -1) throw new Error('Username cannot contain whitespaces');
        // other checks...
        return this.userService.update(id, username);
    }

}
