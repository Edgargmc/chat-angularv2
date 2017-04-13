import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    moduleId: module.id,
    selector: 'ng-home',
    styleUrls:['home.styles.css'],
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {
    socket: SocketIOClient.Socket;
    
    constructor(){
        this.socket = io.connect();
    }
    
    ngOnInit(){ 
        this.socket.emit('event1',{
            msg: 'Cliente to server, can you hear me server?'
        });
    
       this.socket.on('event2',(data:any)=> {
           console.log(data.msg);
           this.socket.emit('event3', {
            msg: 'yes, it working for me'
           })
        });
    
        this.socket.on('event4', (data:any)=>{
            console.log(data.msg);
         });
    }
}
