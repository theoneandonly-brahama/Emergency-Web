import { Service } from "./service";

export class Police extends Service{
    constructor(public override id:string,public nomPoste:string,public mail:string,public mdp:string){
        super(id)
    }
}
