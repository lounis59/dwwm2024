<?php
/* 
    Cette fois ci nos routes sont plus complexe. 
    Elles sont liées à un controller et à une fonction.
*/
const ROUTES = [
    "05-mvc"=>[
        "controller"=>"userController.php", 
        "fonction"=>"readUsers"
    ],
    "05-mvc/inscription"=>[
        "controller"=>"userController.php", 
        "fonction"=>"createUser"
    ],
    "05-mvc/user/update"=>[
        "controller"=>"userController.php", 
        "fonction"=>"updateUser"
    ],
    "05-mvc/user/delete"=>[
        "controller"=>"userController.php", 
        "fonction"=>"deleteUser"
    ],
    "05-mvc/user/connexion"=>[
        "controller"=>"authController.php",
        "fonction"=>"userConnexion"
    ],
    "05-mvc/user/newMessage"=>[
        "controller"=>"messageController.php",
        "fonction"=>"createMessage"
    ]
];
?>