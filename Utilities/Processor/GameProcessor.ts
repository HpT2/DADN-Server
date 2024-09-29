import { Game } from "../Classes";
import { MainProcessor } from ".";
import { Processor } from "./Processors";

export class GameProcessor extends Processor{
    gameList : Map<string, Game>;

    constructor(){
        super();
        this.gameList = MainProcessor.Instance.gameList;
    }

    Process(data : any){
        console.log("data game: " + data);
    }
}