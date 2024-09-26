import { Player } from "../Classes";
import { MainProcessor, Processor } from ".";

export class MenuProcessor extends Processor{
    playerList : Map<string, Player>;

    constructor(){
        super();
        this.playerList = MainProcessor.Instance.playerList;
    }
    
    Process(data : any){

    }
}