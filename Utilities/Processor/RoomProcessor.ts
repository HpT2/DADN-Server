import { Room } from "../Classes";
import { MainProcessor, Processor } from ".";

export class RoomProcessor extends Processor{
    roomList : Map<string, Room>;
    
    constructor(){
        super();
        this.roomList = MainProcessor.Instance.roomList;
    }

    Process(data : any){
        
    }
}