
// the key value pairs for a user
export interface User {
    username: string;
    password: string;
    gender: 'M' | 'F' | '';
    token: string;
}


export const UserKeys : (keyof User)[] = ['username', 'password', 'token', 'gender'];
