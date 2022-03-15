export  interface UserData {
id: number,
name: string,
email: string, 
Roles:Roles[]
}
export interface Roles{
roleName:string;
permissions: Permission[]
}
export interface Permission{
    name:string;
    status:"allow"|'deny'
}

