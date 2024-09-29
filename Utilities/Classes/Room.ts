import { Player } from "./Player";

export class Room {
    playerList : Map<string, Player>;

    constructor(player : Player){
        this.playerList = new Map<string, Player>();
        this.playerList.set(player.id, player);
    }
}