import { io, Socket } from "socket.io-client";
import { url } from "./url";

const socket: Socket = io(url, {
    withCredentials: true,
});

export default socket;