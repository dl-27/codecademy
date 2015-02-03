<html>
  <head>
    <title>I am the King of Arrays!</title>
  </head>
  <body>
    <p>
      <?php
      // On the line below, create your own associative array:
      $myArray = array('item1', 2, 5, 'true');

      // On the line below, output one of the values to the page:
     echo $myArray[0];
          
      // On the line below, loop through the array and output
      // *all* of the values to the page:
     foreach($myArray as $a){
         echo $a." ";
     }     
      ?>
    </p>
  </body>
</html>