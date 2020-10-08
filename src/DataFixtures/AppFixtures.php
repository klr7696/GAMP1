<?php

namespace App\DataFixtures;

use App\Entity\CategorieLigne;
use App\Entity\LigneDepense;
use App\Entity\LivreCompte;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker=Factory::create('FR-fr');

        for($a=1; $a<=10; $a++)
        {
            $decision1= $faker->firstName();
            $description1=$faker->paragraph(1);

            $categorie= new CategorieLigne();

            $categorie->setCreationAt(new \DateTimeImmutable())
                ->setIsAffecter(mt_rand(0,1))
                ->setIsNonSupprimable(mt_rand(0,1))
                ->setModifAt(new \DateTimeImmutable())
                ->setAbreviationCat($decision1)
                ->setDescriptionCat($description1)
                ->setNomCat($decision1);

            $this->addReference("category{$a}", $categorie);

            $manager->persist($categorie);
        }

        for ($i=1; $i<=6; $i++)
        {
            $decision= $faker->sentence(6,false);
            $description=$faker->paragraph(1);
            $livre= new LivreCompte();
            $livre->setCreationAt(new \DateTimeImmutable())
                ->setIsNonSupprimable(mt_rand(0,1))
                ->setIsActiver(mt_rand(0,1))
                ->setAdoptionDate(new \DateTimeImmutable())
                ->setExecutionDate(new \DateTimeImmutable())
                ->setDecretLivre($decision)
                ->setDescriptionLivre($description)
                ->setModifAt(new \DateTimeImmutable())
                ->setAnneeRef(new \DateTimeImmutable());

            $this->addReference("livre{$i}", $livre);


            $manager->persist($livre);

        }

        for($j=1; $j<=40; $j++)
        {
            $decision2=$faker->sentence(6,false);
            $description2=$faker->paragraph(1);

            $compte =new LigneDepense();

            $compte->setCreationAt( new \DateTimeImmutable())
                ->setIsNonSupprimable(mt_rand(0,1))
                ->setIsMouvementer(mt_rand(0,1))
                ->setDescriptionLigne($decision2)
                ->setLibelleLigne($decision2)
                ->setNumeroLigne(mt_rand(100,1000))
                ->setCategorieLigne($this->getReference("category".mt_rand(1,10)))
                ->setDenominationLigne($decision2)
                ->setModifAt(new \DateTimeImmutable())
                ->setLivreCompte($this->getReference("livre" .mt_rand(1,6)))
                ->setHierachieLigne('CHAPITRE')
                ;


            $this->addReference("parent{$j}", $compte);

            $manager->persist($compte);

        }


        for($b=1; $b<=100; $b++)
        {
            $decision2= $faker->sentence(6,false);
            $description2=$faker->paragraph(1);

            $compte1 =new LigneDepense();

            $compte1->setCreationAt( new \DateTimeImmutable())
                ->setIsNonSupprimable(mt_rand(0,1))
                ->setIsMouvementer(mt_rand(0,1))
                ->setDescriptionLigne($decision2)
                ->setLibelleLigne($decision2)
                ->setNumeroLigne(mt_rand(100,1000))
                ->setCategorieLigne($this->getReference("category".mt_rand(1,10)))
                ->setDenominationLigne($decision2)
                ->setModifAt(new \DateTimeImmutable())
                ->setLivreCompte($this->getReference("livre" .mt_rand(1,6)))
                ->setCompteParent($this->getReference("parent" .mt_rand(1,40)))
                ->setHierachieLigne("ARTICLE");

            $this->addReference("salut{$b}", $compte1);

            $manager->persist($compte1);

        }


        for($c=1; $c<=370; $c++)
        {
            $decision2= $faker->sentence(6,false);
            $description2=$faker->paragraph(1);

            $compte2 =new LigneDepense();

            $compte2->setCreationAt( new \DateTimeImmutable())
                ->setIsNonSupprimable(mt_rand(0,1))
                ->setIsMouvementer(mt_rand(0,1))
                ->setDescriptionLigne($decision2)
                ->setLibelleLigne($decision2)
                ->setNumeroLigne(mt_rand(100,1000))
                ->setCategorieLigne($this->getReference("category".mt_rand(1,10)))
                ->setDenominationLigne($decision2)
                ->setModifAt(new \DateTimeImmutable())
                ->setLivreCompte($this->getReference("livre" .mt_rand(1,6)))
                ->setCompteParent($this->getReference("salut" .mt_rand(1,100)))
                ->setHierachieLigne("PARAGRAPHE");

            //$this->addReference("parent", $compte);

            $manager->persist($compte2);

        }

        $manager->flush();
    }
}
