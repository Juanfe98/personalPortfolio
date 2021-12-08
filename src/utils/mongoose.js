import {connect, connection} from 'mongoose';

const conn = {
  isConnected: false
}

// Function to connect to mongo database
export async function dbConnect(){
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URL)
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log('MongoDb is now connected');
})

connection.on("error",(err) => {
  console.log(err);
})