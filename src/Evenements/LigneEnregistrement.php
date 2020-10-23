<?php


namespace App\Evenements;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\LigneDepense;
use App\Entity\LivreCompte;
use Container40wfQtm\getLivreCompteRepositoryService;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class LigneEnregistrement implements EventSubscriberInterface
{


    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setLigne', EventPriorities::PRE_VALIDATE]
        ];// TODO: Implement getSubscribedEvents() method.
    }

    public function setLigne(ViewEvent $event)
    {

        $result = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        if ($result instanceof LigneDepense && $method === 'POST' || $result instanceof LigneDepense && $method === 'PUT') {

            $result->setIsMouvementer(false)
                   ->setIsNonSupprimable(false);
            if ($method === 'POST') {
                $date1 = new \DateTimeImmutable('now', new \DateTimeZone('UTC'));
                $result->setCreationAt($date1);
            } elseif ($method === 'PUT') {
                $date = new \DateTime('now', new \DateTimeZone('UTC'));
                $result->setModifAt($date);

            }




        }
    }
}