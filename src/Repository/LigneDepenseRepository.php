<?php

namespace App\Repository;

use App\Entity\LigneDepense;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LigneDepense|null find($id, $lockMode = null, $lockVersion = null)
 * @method LigneDepense|null findOneBy(array $criteria, array $orderBy = null)
 * @method LigneDepense[]    findAll()
 * @method LigneDepense[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LigneDepenseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LigneDepense::class);
    }
   /* public function categoriParent(LigneDepense $depense){
        return $this->createQueryBuilder("c")
                    ->select("c.categorieLigne")
                    ->from("App:LigneDepense", "p")
                    ->where("p.compteParent= :depense")
                    ->setParameter("depense", $depense)
                    ->getQuery()
                    ->getResult();
    }*/

    // /**
    //  * @return LigneDepense[] Returns an array of LigneDepense objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LigneDepense
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
