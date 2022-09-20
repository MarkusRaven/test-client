import { CLIENT_URI } from './../constants';
import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(4001, {
  cors: { origin: CLIENT_URI },
  serveClient: false,
  transports: ['websocket'],
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  private logger = new Logger('AppGateway');

  afterInit(wss: Server) {
    console.log(wss);
  }

  handleConnection(client: Socket, ...args: any[]) {
    const userName = client.handshake.query.userName as string;

    client.broadcast.emit('log', `${userName} connected`);
    this.logger.log('New client connected');
    client.emit('connection', 'Successfully connected to server');
  }

  handleDisconnect(client: Socket) {
    // const socketId = client.id;
    // const userName = users[socketId];
    // delete users[socketId];
    // client.broadcast.emit('log', `${userName} disconnected`);
  }
}
