<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Movies | List</title>
</head>
<body class="movies">
  <section class="movies-container">
    <ul class="movies-list">
<?php

    $service = "http://api-service:3000/";
    $file_path = $service . "movies";
    $json_str = file_get_contents($file_path);

    $json = json_decode($json_str, true);
    $movies = $json["models"];

    foreach ($movies as $movie) {
?>
      <li><?= $movie ?></li>
<?php
    }
?>
    </ul>
  </section>
</body>
</html>
