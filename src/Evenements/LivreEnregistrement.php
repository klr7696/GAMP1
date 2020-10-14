<?php


namespace App\Evenements;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\LivreCompte;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class LivreEnregistrement implements EventSubscriberInterface
{

    public static function getSubscribedEvents()
    {
       return[
           KernelEvents::VIEW=>['setLivre',EventPriorities::PRE_VALIDATE]
       ];
        // TODO: Implement getSubscribedEvents() method.
    }
    public function setLivre(ViewEvent $vue){
        $recup=$vue->getControllerResult();
        $method =$vue->getRequest()->getMethod();

        if($recup instanceof LivreCompte && $method==='POST'|| $recup instanceof LivreCompte && $method==='PUT')
        {


            $recup->setIsActiver(false);
            $recup->setIsNonSupprimable(false);
            if($method==='POST'){
                $date1 = new \DateTimeImmutable('now',new \DateTimeZone('UTC'));
               $recup->setCreationAt($date1);
            }
            elseif($method==='PUT'){
                $date= new \DateTime('now', new \DateTimeZone('UTC'));
                $recup->setModifAt($date);
            }


        }
        //dd($result);
    }
}