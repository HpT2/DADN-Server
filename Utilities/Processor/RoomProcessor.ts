import { Room } from "../Classes";
import { MainProcessor } from ".";
import { Processor } from "./Processors";

export class RoomProcessor extends Processor{
    roomList : Map<string, Room>;
    
    constructor(){
        super();
        this.roomList = MainProcessor.Instance.roomList;
    }

    Process(data : any){
        console.log("data room: " + data);
    }
}