<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Night12</title>

    </head>

    <body>

        <!-- HEADER -->
        <header>
        <h1>Guys, PHP! PHP, guys!</?h1>
        <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Echo">Echo</a></li>
            <li><a href="#Variable">Variable</a></li>
        </ul>
        </header>

        <!-- About -->
        <section id="About" class="sec">
            <?php
                echo "<p>Hello<br>
                From now on, I want to introduce you to the <b>PHP</b> programming language.<br>
                This language is used to build the <b>back-end</b> site and it is very beautiful and cool.</p>";
                echo " <p>PHP<b> (recursive acronym for PHP: Hypertext Preprocessor) </b>is a widely-used open source general-purpose scripting language 
                <br> that is especially suited for web development and can be embedded into<b>HTML</b> .</p>";
                echo "<p>Nice, but what does that mean? An example: <br><br></p>";
            ?>
            <div class="div-php">
                <textarea name="PHP!" id="box1" cols="50" rows="16"> 

    <!DOCTYPE html>
    <html>
        <head>
            <title>Example</title>
        </head>
        <body>

            «?php
                echo "Hi, I'm a PHP script!";
            ?»

        </body>
    </html>

                </textarea>
            </div>    
            <?php
                echo "<p>Instead of lots of commands to output HTML (as seen in C or Perl), PHP pages contain HTML with embedded code that does <b>something</b> (in this case, output <b>Hi, I'm a PHP script!</b>). 
                <br>The PHP code is enclosed in special start and end processing instructions <b>«?php</b> and <b>?»</b> that allow you to jump into and out of (PHP mode.) <br><br>

                What distinguishes PHP from something like client-side JavaScript is that <b>the code is executed on the server</b>, 
                generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was. 
                <br>You can even configure your web server to process all your HTML files with PHP, and then there's really no way that users can tell what you have up your sleeve.<br><br>
                
                The best part about using PHP is that it is extremely simple for a newcomer, but offers many advanced features for a professional programmer. 
                <br>Don't be afraid to read the long list of PHP's features. You can jump in, in a short time, and start writing simple scripts in a few hours.</p>";
                echo "<p><b>Note: </b><cg>«» has been used instead of <> in some places.</cg></p>";
            ?>
        </section>


        <!-- echo -->
        <section id="Echo" class="sec">
            <h1>What`s echo?</h1>
            <?php
                echo "<p>With PHP, there are two basic ways to get output: <b>echo and print</b>.<br>

                In this tutorial we use echo or print in almost every example.<br> So, this chapter contains a little more info about those two output statements. <br>
                
                echo and print are more or less the same. <br>They are both used to output data to the screen.<br>
                
                The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. <br>echo can take multiple parameters <b>(although such usage is rare)</b> while print can take one argument. echo is marginally faster than print.<br></p>";
            ?>
            <p class="cbl">
                For example: <br><br>
                echo <t>"A"</t>;<br>
                echo <t>"B"</t>;<br>
                echo <t>"C"</t>;<br>
            </p>
            <?php
                echo"<p><b>Note : </b>Each PHP statement must end with a <t>semicolon</t> . 
                Forgetting to add a <t>semicolon</t> at the end of a statement results in an error.</p>";
                echo "<p><t>HTML</t> markup can be added to the text in the echo statement: <br></p>";
            ?>
            <p class="cbl">
                echo <t>"«strong»This is a bold text.«/strong»"</t>;
            </p>

        </section>


        <!-- Variable -->
        <section id="Variable" class="sec">
            <h1>Variable ?</h1>
            <?php
                echo "<p>Variables are used as <b>containers</b> in which we store information.<br>
                A PHP variable starts with a dollar sign <t>($)</t>, which is followed by <b>the name</b> of the variable</p>";
            ?>
            <p class="cbl">
            $variable_name = <t>value</t>;
            </p>
            <p>
            <strong>Rules for PHP variables: </strong><br><br>
            - A variable name must start with a <b>letter or an underscore.</b> <br>
            - A variable name cannot start with a <b>number.</b> <br>
            - A variable name can only contain <b>alpha numeric characters and underscores (A z, 0 9, and _ ). </b><br>
            - Variable names are <b>case sensitive</b> (<t>$name</t> and <t>$NAME</t> would be two different variables). <br><br>
            <strong>For example : </strong><br>
            <span class="cbl">
                $name = <t>'Hossein'</t>;<br>
                $age = <t>21</t>;<br>
                echo <t>$name<t/>;<br>
            </span>
            </p>
            <?php
                echo "<p>In this example, notice that we did not have to tell PHP which data type the
                variable is.<br>
                PHP <t>automatically</t> converts the variable to the correct data type, depending on
                its value. <br>
                Unlike other programming languages, PHP has no command for declaring a
                variable.<br>
                It is created the moment you first assign a value to it.<br>
                </p>";
            ?>
            <ul>
                <li>String</li>
                <span class="span">
                    To save a string in php, it is enough to put the desired data in <t>" " or ' '</t>.
                    <br> In this case, the variable will automatically be converted into a <t>string</t>.<br><br>
                    <span class="cbl">$string1 =<t> "Hello world!" </t>; </span><cg>//double quotes</cg><br>
                    <span class="cbl">$string2 =<t> 'Hello world!' </t>; </span><cg>//single quotes</cg><br>
                    <b>Tip: </b>You can join two strings together using the dot <t>( . ) </t>concatenation operator. <br>
                    For example: <span class="cbl">echo $s1 . $s2</span>
                </span><br><br>

                <li>Integer</li>
                <span class="span">
                    An integer is a whole number (without decimals) that must fit the following criteria: <br><br>
                    -It cannot contain commas or blanks. <br>
                    -It must not have a decimal point. <br>
                    -It can be either <b>positive</b> or <b>negative</b> <br>
                    <span class="cbl"><br>
                        $int1 = <t>42</t> ; <cg>// positive number</cg><br>
                        $int2 = <t>-42</t> ; <cg>// negative number</cg><br>
                    </span><br>
                    Variables can store a variety of data types.
                </span><br><br>

                <li>Float</li>
                <span class="span">
                    A float, or floating point number, is a number that includes a decimal point. <br>
                    <br>
                    <span class="cbl">
                        $x = <t>42.168</t>;
                    </span><br><br>
                </span>

                <li>Boolean</li>
                <span class="span">
                    A Boolean represents two possible states: <b>TRUE</b> or <b>FALSE</b>.
                    <span class="cbl"><br>
                    $x = <t>true</t> ; <br>
                    $y = <t>false</t> ;<br>
                    </span><br>
                    <b>Note : </b>Booleans are often used in conditional testing, which will be covered later on in
                    the course. <br>
                </span><br>


                <li>array</li>
                <span class="span">We will examine it in future articles.</span>
            </ul>        
        </section>
    </body>
</html>