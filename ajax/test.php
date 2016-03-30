<?php
	//fake database.
	$listUsers = array("trandinhtoai", "tranquoctuan");
	foreach ($listUsers as $key => $user) {
		if ($user === $listUsers[0]) {
			echo "true";
			break;
		} else {
			echo "false";
			break;
		}
	}
?>
