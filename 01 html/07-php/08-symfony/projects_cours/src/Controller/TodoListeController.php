<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class TodoListeController extends  AbstractController
{
    #[Route("/todoListe", "app_todo")]
    public function todoListe( Request $request){
        // dump($request);
        $idTask = $request->request->get('cat');
        // dd($idTask);
        $task = $request->request->get('task');
        $session= $request->getSession();
        if(!empty($task) && !empty($idTask))
        {

            if($session->has('task'))
            {
                $oldTask = $session->get('task');
                $oldTask[$idTask][] = $task;
                // $newTask = array_merge($oldTask,$taskTable);
               $session->set('task',$oldTask);

            }else
            {
            $taskTable = [$idTask=>[]];
            $taskTable[$idTask][] = $task;
               $session->set('task',$taskTable);
            }

            dump($session->get('task'));

        }
        return $this->render("home/todoListe.html.twig");
    }
}
