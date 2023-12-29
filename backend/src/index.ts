import 'reflect-metadata'; 

import express, {Request, Response} from "express"; 
import { validate } from 'class-validator';
import db from './db';
import { Ad } from './entities/ad';
import { In } from 'typeorm';
import { Tag } from './entities/tag';
import { Category } from './entities/category';

//const db = new sqlite.Database('the_good_corner.sqlite')

const app = express();
const port = 3000; 

app.use(express.json()); 

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")// envois de la reponse 
});

app.get("/ads", async (req: Request, res: Response) => {

    try {
      const ads = await Ad.find();
      res.send(ads);
    } catch (err) {
      console.log(err); 
      res.sendStatus(500)
    }

  });

app.post("/ads", async (req: Request, res: Response) => {

  try {
    const newAd = Ad.create(req.body); 
    const errors = await validate(newAd); 
    if(errors.length !== 0) return res.status(422).send({errors}); 

    //newAd.category = await Category.findOneBy({id: req.body.categoryId});

    const {tagIds = []} = req.body; 
    const tagsToAssociate = await Tag.find({where: {id: In(tagIds)}}); 

    newAd.tags = tagsToAssociate; 
    const newAdWithId = await newAd.save(); 
    res.send(newAdWithId)
  } catch (err) {
    console.log(err); 
    res.sendStatus(500)
  }
   
  });

app.delete("/ads/:id", async (req : Request, res: Response) => {
   
  try {
    const adToDelete = await Ad.findOneBy({id: parseInt(req.params.id, 10)}); 
    if(!adToDelete) return res.sendStatus(404); 
    await adToDelete.remove(); 
    res.sendStatus(204)

  } catch (err) {

    console.log(err); 
    res.sendStatus(500)
  }
})

app.patch("/ads/:id", async (req : Request, res: Response) => {
  try {
    const adToUpdate = await Ad.findOneBy({id: parseInt(req.params.id, 10)}); 
    if(!adToUpdate) return res.sendStatus(404); 
    await Ad.merge(adToUpdate, req.body);
    res.send(await adToUpdate.save());

  } catch (err) {

    console.log(err); 
    res.sendStatus(500)
  }
})

app.listen(port, async () => {
  await db.initialize(); 
 console.log(`Example app listening on port ${port}`); 
});