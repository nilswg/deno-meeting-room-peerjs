import { PeerServer } from "./deno/peer.min.ts";

const port = 3001;
PeerServer({ port: port }, () => {
  console.log(`PeerServer listening on ${port}!`);
});