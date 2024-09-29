export class Player {
    port : number;
    address : string;
    name : string;
    id : string;
    //others attr

    constructor(port : number, address : string, name : string, id : string)
    {
        this.port = port;
        this.address = address;
        this.name = name;
        this.id = id;
    }
}
