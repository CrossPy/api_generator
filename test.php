<!DOCTYPE html>
<html>
<head>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>Coming Soon</title>
  <link rel="stylesheet" type="text/css" href="css/test.css">
</head>
<body>

  <header>
    <div class="container">
      <div id="title">
        <h1><span class="highlight">SUNAPI</span> 2.0 Generator</h1>
      </div>
      <div id="logo">
        <img src="img/logo.png" width=200 height= 50>
      </div>
    </div>
  </header>

  <section id="boxes">
    <div class="container">
      <p id="subtitle">SUNAPI 2.0 Generator</p>
      <div class="box">
        <h3>SUNAPI List</h3>
      </div>
      <div class="box">
        <h3>SUNAPI Commands</h3>
        <nav
      </div>
    </div>
  </section>
  <?php foreach ($sunapi as $feature => $options): ?>
    <?php foreach ($options as $option): ?>
      <?php echo $options; ?>
    <?php endforeach; ?>
  <?php endforeach; ?>
  <footer>
    <p>Hanwha Techwin, Copyright &copy; 2018</p>
  </footer>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
</body>
</html>