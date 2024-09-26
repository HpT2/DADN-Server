import { Game } from "../Classes";
import { MainProcessor, Processor } from ".";

export class GameProcessor extends Processor{
    gameList : Map<string, Game>;

    constructor(){
        super();
        this.gameList = MainProcessor.Instance.gameList;
    }

    Process(data : any){

    }
}