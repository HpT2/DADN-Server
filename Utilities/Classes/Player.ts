import {Socket} from 'dgram';

export class Player {
    socket : Socket;
    name : string;
    id : string;
    //others attr

    constructor(socket : Socket, name : string, id : string)
    {
        this.socket = socket;
        this.name = name;
        this.id = id;
    }
}
