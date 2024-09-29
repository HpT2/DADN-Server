import { Player } from "../Classes";
import { MainProcessor } from ".";
import { Processor } from "./Processors";

export class MenuProcessor extends Processor{
    playerList : Map<string, Player>;

    constructor(){
        super();
        this.playerList = MainProcessor.Instance.playerList;
    }
    
    Process(data : any){
        console.log("data menu: " + data);
    }
}