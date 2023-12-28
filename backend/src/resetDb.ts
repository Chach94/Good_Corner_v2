import db from './db'; 
import {Ad} from './entities/ad'
import { Category } from './entities/category';

async function main(){
    await db.initialize(); 

  const ad1 = Ad.create({
        title: "Macbook pro M2",
        description: "My computer",
        owner: "cha",
        price: 1250,
        picture: "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
        location: "Bordeaux"
    })

    const cat1 = Category.create({name: "informatique"}); 
    await cat1.save();
    ad1.category = cat1; 
    await ad1.save()
}

main()