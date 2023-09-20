import { User } from './User';

export interface UserService {
    add(username: string): User;
    getById(id: number): User | null;
    delete(id: number): User | null;
    update(id: number, username: string): User | null;
}
