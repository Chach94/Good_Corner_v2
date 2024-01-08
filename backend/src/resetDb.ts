import db from './db'; 
import {Ad} from './entities/ad'
import { Category } from './entities/category';
import { Tag } from './entities/tag';


async function clearDB(){
    const runner = db.createQueryRunner(); 
    await runner.query("PRAGMA foreign_keys=OFF"); 
    await Promise.all(
        db.entityMetadatas.map(async (entity) => 
        runner.query(`DROP TABLE IF EXISTS ${entity.tableName}` ))
    ); 

    await runner.query("PRAGMA foreign_keys=ON");
    await db.synchronize();
}

async function main(){
    await db.initialize(); 
    await clearDB();

  const ad1 = Ad.create({
        title: "Macbook pro M2",
        description: "My computer",
        owner: "cha",
        price: 1250,
        picture: "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
        location: "Bordeaux"
    })
    const ad2 = Ad.create({
        title: "Montres",
        description: "une montre",
        owner: "Louis",
        price: 50,
        picture: "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
        location: "Paris"
    })

    const cat1 = Category.create({name: "informatique"}); 
    const cat2 = Category.create({ name: "voitures" });
    const tag1 = Tag.create({name: "tag1"});
    const tag2 = Tag.create({name: "tag2"});
    const tag3 = Tag.create({name: "tag3"});
    
    ad1.category = cat1; 
    ad1.tags = [tag1, tag2]; 

    ad2.category = cat2
    ad2.tags =[tag2, tag3]

    await ad1.save(); 
    await ad2.save(); 
    
}

main()