export class Compte{
    id?:number;
    email!:string;
    mdp!:string;

    constructor(email:string,mdp:string,id?:number){
        this.id=id;
        this.email = email;
        this.mdp = mdp;
    }
}