import { PeerServer } from "./deno/peer.min.ts";

const port = 80;
PeerServer({ port: port }, () => {
  console.log(`PeerServer listening on ${port}!`);
});