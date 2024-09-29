import { Player, Room, Game } from "../Classes";
import * as dgram from 'dgram';
import { MenuProcessor, RoomProcessor, GameProcessor } from ".";
import { Processor } from "./Processors";
import { server } from "typescript";
import { randomInt } from "crypto";

export class MainProcessor extends Processor{
    serverSocket : dgram.Socket;
    port : number;
    roomList : Map<string, Room>;
    gameList : Map<string, Game>;
    playerList : Map<string, Player>;
    menuProcessor : MenuProcessor;
    roomProcessor : RoomProcessor;
    gameProcessor : GameProcessor;
    stateHandler : Map<string, Processor>;
    static Instance : MainProcessor;

    constructor(){
        super();
        MainProcessor.Instance = this;
        this.roomList = new Map<string, Room>();
        this.gameList = new Map<string, Game>();
        this.playerList = new Map<string, Player>();
        this.menuProcessor = new MenuProcessor();
        this.roomProcessor = new RoomProcessor();
        this.gameProcessor = new GameProcessor();
        this.stateHandler = new Map<string, Processor>();
        this.stateHandler.set('menu', this.menuProcessor);
        this.stateHandler.set('room', this.roomProcessor);
        this.stateHandler.set('game', this.gameProcessor);

        this.port = 9999;
        this.serverSocket = dgram.createSocket('udp4');
        this.serverSocket.on('listening', () => {
            let serverAddress : any = this.serverSocket.address();
            console.log(`Server listening on ${serverAddress.address}:${serverAddress.port}`);
        });
        this.serverSocket.bind(this.port);

        //handle message
        this.serverSocket.on("message", (data : Buffer, rInfo : dgram.RemoteInfo) => {
            let msg : string = data.toString("utf-8");
            let json : any = JSON.parse(msg);
            console.log(json);
            this.stateHandler.get(json.state)?.Process(json.data);
            //this.serverSocket.send("hello " + randomInt(10, 100), rInfo.port, rInfo.address);
        }); 

    }
}