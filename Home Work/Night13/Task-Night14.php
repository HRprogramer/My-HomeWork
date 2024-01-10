<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Night13</title>
    </head>

    <body>
        <?php            
            echo "Hello <br>
            We want to calculate the average, maximum and minimum scores of five students. <br>
            The first step is quantification: ";
        ?> 
        <p>   
            $num1 = 20; <br>
            $num2 = 18; <br>
            $num3 = 14; <br>
            $num4 = 11; <br>    
            $num5 = 16; <br>
        </p>
        <?php
            $num1 = 20;
            $num2 = 18;
            $num3 = 14;
            $num4 = 11;   
            $num5 = 16;
            $sum = $num1 + $num2 + $num3 + $num4 + $num5 ;
            $num6 = max ( $num1 , $num2 , $num3 , $num4 , $num5) ;
            $num7 = min ( $num1 , $num2 , $num3 , $num4 , $num5) ;
            echo "Let's go to calculate the average:<br>";
        ?>  


        <p>   
            <br>$sum = $num1 + $num2 + $num3 + $num4 + $num5 ;
            <br>echo "average score :" . $sum/5;
        </p>
        <?php
            echo "OUTPUT ---> average score : " . $sum /5;  
        ?>


        <p>
            <br><br>*****Maximum***** <br><br>
            $num6 = max ( $num1 , $num2 , $num3 , $num4 , $num5) ;
            <br>echo "Maximum score :" . $num6;
        </p>
        <?php
            echo "OUTPUT ---> Maximum score : " . $num6;  
        ?>


        <p>
            <br><br>*****minimum***** <br><br>
            $num7 = min ( $num1 , $num2 , $num3 , $num4 , $num5) ;
            <br>echo "minimum score :" . $num7;
        </p>
        <?php
            echo "OUTPUT ---> minimum score : " . $num7;  
        ?>

    </body>
</html>