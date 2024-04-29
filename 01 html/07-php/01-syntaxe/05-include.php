<?php
    /* 
        Include et require permettent d'inclure d'autre fichier dans notre code
        
        Le fichier inclu fera partie du code de la page
        Donc si une variable est declare avant l'inclusion elle est utilisable dans le code inclu

        Include et require font parti des quelque fonctions php dont les parenthese sont optionnelles
    */
    include"../ressources/template/_header.php";
    /* 
        La difference entre include et require est :
            en cas d'errreur include provoquera un "warning" indiquant ou se trouve l'erreur puis continura une fatal erreur qui mettra fin au code 
            alor que require provoquera une fatal error qui mettra fin au code 
    */
?>
<div>
    <p id="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vero cupiditate nemo fugit similique eum labore eveniet ratione recusandae dicta tempore aliquam iusto ad, nihil, iste adipisci architecto ipsam! Consectetur!</p>
    <p id="para2">Aut harum quisquam et quas voluptatum at autem aliquid quis voluptatibus iusto odit, dignissimos ad, cum eum ducimus temporibus molestiae tempore ipsa provident tempora qui hic aperiam laborum! Maxime, ducimus.</p>
    <p id="para3">Corporis reprehenderit ducimus temporibus, libero repellendus provident at suscipit rerum quibusdam quis magni recusandae perferendis, laudantium id adipisci qui? Id fugit nam ipsum mollitia. Placeat dolore ipsam reprehenderit natus nisi.</p>
    <p id="para4">Earum quis, numquam unde iste distinctio blanditiis corrupti aut voluptatum dignissimos illum tenetur error, ex dolores voluptates eius odit minus. Est esse at aut repellendus nisi excepturi ipsa animi id.</p>
    <p id="para5">Accusamus consectetur tenetur debitis numquam necessitatibus deleniti nemo nostrum mollitia architecto cupiditate magnam quos recusandae reiciendis, optio voluptatem? Minus obcaecati hic dolorum iure sunt animi officia sapiente dicta ut incidunt.</p>
</div>
<?php 
    /* 
            Les fonction include et require existe ossi en version "_once" "include_once" et "require_once" vont etre un peu plus longue a s'executer car
            Avant d'inclure le fichier elle vont verifier qu'il n'a pas dejat ete inclu
    */
    include"../ressources/template/_footer.php";
    include_once"../ressources/template/_footer.php";
?>