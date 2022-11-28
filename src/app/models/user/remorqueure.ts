import { Service } from "./service";

export class Remorqueure extends Service{
    
    constructor(public override id:string ,public nom: string,public adresse: string,public mail:string,public mdp:string){
        super(id)
    }
}
