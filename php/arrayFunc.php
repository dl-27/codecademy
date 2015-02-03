<html>
    <p>
	<?php
	$name = array();
	array_push($name, "family1");
	array_push($name, "family2");
	array_push($name, "friend2");
	array_push($name, "friend1");
	sort($name);
	$i = count($name);
	$n = rand(0, $i-1);
	print strtoupper($name[$n]);
	?>
	</p>
</html>