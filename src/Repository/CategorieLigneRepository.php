<?php

namespace App\Repository;

use App\Entity\CategorieLigne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CategorieLigne|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorieLigne|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorieLigne[]    findAll()
 * @method CategorieLigne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorieLigneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorieLigne::class);
    }

    // /**
    //  * @return CategorieLigne[] Returns an array of CategorieLigne objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CategorieLigne
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
