<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class budgetController extends AbstractController
{
    /**
     * @Route("/budget/", name="budget_budget")
     */
    public function index()
    {
        return $this->render('budget/budget/index.html.twig', [
            'controller_name' => 'budgetController',
        ]);
    }
}
