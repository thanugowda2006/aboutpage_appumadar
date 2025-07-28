<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: white;
      color: black;
      transition: 0.3s;
      font-family: sans-serif;
    }
    .dark {
      background-color: black;
      color: white;
    }
    button {
      margin: 20px;
      padding: 10px 15px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button onclick="toggleTheme()">Toggle Theme</button>

  <script>
    function toggleTheme() {
      document.body.classList.toggle('dark');
    }
  </script>
</body>
</html>

