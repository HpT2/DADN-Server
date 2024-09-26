import { Player } from "./Player";

export class Game {
    playerList : Map<string, Player>;
    
    constructor(playerList : Map<string, Player>){
        this.playerList = playerList;
    }
}