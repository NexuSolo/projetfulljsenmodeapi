import { User } from './User';
import { UserService } from './user.service';
import * as jsonfile from 'jsonfile';

export class UserJSONService implements UserService {
    
    add(username: string): User {
        const users = jsonfile.readFileSync('./src/user/users.json').users as User[];
        let maxId = 0;
        users.forEach((user: User) => {
            if(user.id > maxId) {
                maxId = user.id;
            }
        });
        const newUser = new User(maxId + 1, username);
        console.log(newUser);
        users.push(newUser);
        jsonfile.writeFileSync('./src/user/users.json', { users: users });
        return newUser;
    }
    
    getById(id: number): User | null {
        const users = jsonfile.readFileSync('./src/user/users.json').users as User[];
        const res = users.find((user: User) => {
            if(user.id === id) {
                return user;
            }
        });
        if(res === undefined) {
            return null;
        }
        return res;
    }
    
    delete(id: number): User | null {
        const users = jsonfile.readFileSync('./src/user/users.json').users as User[];
        const res = users.find((user: User) => {
            if(user.id === id) {
                return user;
            }
        });
        if(res === undefined) {
            return null;
        }
        users.splice(users.indexOf(res), 1);
        jsonfile.writeFileSync('./src/user/users.json', { users: users });
        return res;
    }

    update(id: number, username: string): User | null {
        const users = jsonfile.readFileSync('./src/user/users.json').users as User[];
        const res = users.find((user: User) => {
            if(user.id === id) {
                return user;
            }
        }
        );
        if(res === undefined) {
            return null;
        }
        res.username = username;
        jsonfile.writeFileSync('./src/user/users.json', { users: users });
        return res;
    }
    
}
