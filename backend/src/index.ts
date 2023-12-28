import 'reflect-metadata'; 

import express, {Request, Response} from "express"; 
import { validate } from 'class-validator';
import db from './db';
import { Ad } from './entities/ad';

//const db = new sqlite.Database('the_good_corner.sqlite')

const app = express();
const port = 3000; 

// let ads: Ad[] = [
//     {
//       id: 1,
//       title: "Bike to sell",
//       description:
//         "My bike is blue, working fine. I'm selling it because I've got a new one",
//       owner: "bike.seller@gmail.com",
//       price: 100,
//       picture:
//         "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
//       location: "Paris",
//       createdAt: "2023-09-05T10:13:14.755Z",
//     },
//     {
//       id: 2,
//       title: "Car to sell",
//       description:
//         "My car is blue, working fine. I'm selling it because I've got a new one",
//       owner: "car.seller@gmail.com",
//       price: 10000,
//       picture:
//         "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
//       location: "Paris",
//       createdAt: "2023-10-05T10:14:15.922Z",
//     },
//   ];

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
    console.log({errors}); 

    if(errors) return res.status(422).send({errors}); 

    console.log()
    res.send(await newAd.save())
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