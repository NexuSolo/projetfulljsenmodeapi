import { User } from './User';

export interface UserService {
    add(username: string): User;
    getById(id: number): User | null;
}
