// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {dbConnect} from 'utils/mongoose';
import Project from 'models/Project';

dbConnect();

export default async (req, res) => {
  const projects = await Project.find();
  if(!projects){
    res.status(500).send("An Error has Ocurred, Try later")
  }
  res.status(200).json({ data: projects });
}