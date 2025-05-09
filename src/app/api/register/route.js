import User from './../../../models/User';
 import mongoose from "mongoose";

export async function POST(req) {
 const body = await req.json();

 await mongoose.connect(process.env.MONGO_URL);  // ✅ await here to ensure connection

     const createdUser = await User.create(body);

    return Response.json(createdUser);
    console.log(createdUser);
}
