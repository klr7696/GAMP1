<?php


namespace App\Evenements;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\CategorieLigne;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;


class CatEnregistrement implements EventSubscriberInterface
{

    public static function getSubscribedEvents()
    {
        return[
            KernelEvents::VIEW=>['setCategorie',EventPriorities::PRE_VALIDATE]
        ];// TODO: Implement getSubscribedEvents() method.
    }
    public function setCategorie(ViewEvent $event)
    {
        $result= $event->getControllerResult();
        $method= $event->getRequest()->getMethod();
        if($result instanceof CategorieLigne && $method==='POST')
        {
            $result->setIsNonSupprimable(false);
            $result->setIsAffecter(false);
        }
        //dd($result);
    }
}