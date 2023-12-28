-- SQLite
CREATE TABLE ad 
(
   id INTEGER PRIMARY KEY AUTOINCREMENT, 
   title VARCHAR(100) NOT NULL, 
   description TEXT, 
   owner VARCHAR(100) NOT NULL, 
   price INT, 
   picture VARCHAR(100), 
   location VARCHAR(100), 
   createdAt DATE, 
   categories TEXT

); 

INSERT INTO ad (title, description, owner, price, picture, location, createdAt, categories) VALUES
('Vélo de ville vintage', 'Magnifique vélo vintage en parfait état.', 'Jean Dupont', 120, '[lien_image1]', 'Paris', '2023-12-01', 'Sports & Loisirs'),
('Tableau abstrait moderne', 'Œuvre d''art contemporaine pour décoration intérieure.', 'Marie Lefèvre', 150, '[lien_image2]', 'Bordeaux', '2023-12-02', 'Art & Décoration'),
('Livre "L''Étranger"', 'Roman classique de Albert Camus.', 'Émile Martin', 8, '[lien_image3]', 'Lyon', '2023-12-03', 'Livres & Magazines'),
('Smartphone Samsung Galaxy S20', 'Comme neuf, avec boîte et accessoires.', 'Sophie Laurent', 290, '[lien_image4]', 'Paris', '2023-12-04', 'Électronique & High-Tech'),
('Chaussures Adidas Ultraboost', 'Confortables et stylées pour la course à pied.', 'Pierre Leroux', 110, '[lien_image5]', 'Bordeaux', '2023-12-05', 'Mode & Accessoires'),
('Appareil photo Canon EOS 200D', 'Idéal pour les photographes débutants.', 'Isabelle Bernard', 280, '[lien_image20]', 'Lyon', '2023-12-20', 'Électronique & High-Tech'), 
('Sac à main chic', 'Design élégant pour toutes occasions.', 'Claire Dufour', 80, '[lien_image6]', 'Paris', '2023-12-06', 'Mode & Accessoires'),
('Guitare acoustique Yamaha', 'Son riche et excellente condition.', 'Nicolas Perrin', 200, '[lien_image7]', 'Lyon', '2023-12-07', 'Instruments de musique'),
('Lunettes de soleil Ray-Ban', 'Style intemporel, neuves.', 'Elodie Bernard', 100, '[lien_image8]', 'Bordeaux', '2023-12-08', 'Mode & Accessoires'),
('Ordinateur portable Lenovo', 'Idéal pour le travail et le divertissement.', 'Marc Lefèvre', 450, '[lien_image9]', 'Paris', '2023-12-09', 'Électronique & High-Tech'),
('Robe de soirée élégante', 'Parfaite pour les occasions spéciales.', 'Sophie Dubois', 150, '[lien_image10]', 'Bordeaux', '2023-12-10', 'Mode & Accessoires'),
('Enceinte Bluetooth JBL', 'Qualité sonore exceptionnelle.', 'Paul Durand', 70, '[lien_image11]', 'Lyon', '2023-12-11', 'Électronique & High-Tech'),
('Parfum Chanel N°5', 'Classique intemporel.', 'Isabelle Martin', 120, '[lien_image12]', 'Paris', '2023-12-12', 'Beauté & Bien-être'),
('Skateboard professionnel', 'Pour les amateurs de sports urbains.', 'Lucas Leroy', 90, '[lien_image13]', 'Bordeaux', '2023-12-13', 'Sports & Loisirs'),
('Console de jeux PS5', 'Comme neuve, avec plusieurs jeux.', 'Alexandre Blanc', 550, '[lien_image14]', 'Lyon', '2023-12-14', 'Électronique & High-Tech'),
('Bague en or avec diamant', 'Élégance et brillance.', 'Marie Durand', 800, '[lien_image15]', 'Paris', '2023-12-15', 'Mode & Accessoires'),
('Sac à dos de randonnée', 'Confortable et spacieux.', 'Jeanne Rousseau', 60, '[lien_image16]', 'Lyon', '2023-12-16', 'Sports & Loisirs'),
('Machine à café Nespresso', 'Parfait pour les amateurs de café.', 'Antoine Dupuis', 100, '[lien_image17]', 'Bordeaux', '2023-12-17', 'Maison & Jardin'),
('Collier en argent', 'Design moderne et élégant.', 'Caroline Lefèvre', 90, '[lien_image18]', 'Paris', '2023-12-18', 'Mode & Accessoires'),
('Trottinette électrique Xiaomi', 'Pratique pour les déplacements urbains.', 'Martin Petit', 250, '[lien_image19]', 'Lyon', '2023-12-19', 'Électronique & High-Tech');

 

