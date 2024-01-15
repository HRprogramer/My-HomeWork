<?php



function HeaderName($x){

    $info= array('Hossein Rajabi' , 'Student | Programmer', 'Donava@gmail.com');

    if($x === "name"){

        $name = $info[0];
        return $name;
    }
    elseif($x === "job"){

        $job = $info[1] ;
        return $job;    
    }
    elseif($x === 'email'){

        $email = $info[2] ;
        return $email;
    }
    else{

        echo 'Error';
    }
}


?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Night 16</title>
    </head>


    <body>
        <header>
            <main>
                <div>
                    <h1>
                        <?php
                        $Info = HeaderName('name'); 
                        echo $Info;
                        ?>
                    </h1>

                    <p>
                        <?php 
                        $Info = HeaderName('job'); 
                        echo $Info;
                        ?>
                    </p>
                </div>

                <div>
                    <a href="                        
                        <?php 
                        $Info = HeaderName('email'); 
                        echo $Info;
                        ?> 
                    ">Donava</a>
                </div>
            </main>    
        </header>
    </body>
</html>