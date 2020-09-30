<?php

namespace App\Repository;

use App\Entity\LivreCompte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LivreCompte|null find($id, $lockMode = null, $lockVersion = null)
 * @method LivreCompte|null findOneBy(array $criteria, array $orderBy = null)
 * @method LivreCompte[]    findAll()
 * @method LivreCompte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LivreCompteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LivreCompte::class);
    }

    // /**
    //  * @return LivreCompte[] Returns an array of LivreCompte objects
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
    public function findOneBySomeField($value): ?LivreCompte
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
