<?php
	$listUsers = array("trandinhtoai", "tranquoctuan");
	if ($_GET["username"]) {
		foreach ($listUsers as $key => $username) {
			if ($username === $_GET["username"]) {
				return true;
			}
			return false;
		}
	}
?>
