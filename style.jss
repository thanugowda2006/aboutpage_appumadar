<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Stylish Theme Toggle</title>
  <style>
    body {
      transition: background-color 0.5s ease, color 0.5s ease;
      font-family: 'Segoe UI', sans-serif;
    }
    .light-mode {
      background-color: #f5f5f5;
      color: #333;
    }
    .dark-mode {
      background-color: #1e1e1e;
      color: #f5f5f5;
    }
    .toggle-btn {
      padding: 10px 20px;
      background: linear-gradient(135deg, #4f46e5, #6d28d9);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      margin-top: 50px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body class="light-mode">
  <center>
    <button class="toggle-btn" onclick="toggleTheme()">Toggle Theme</button>
  </center>

  <script>
    function toggleTheme() {
      const body = document.body;
      body.classList.toggle("light-mode");
      body.classList.toggle("dark-mode");
    }
  </script>
</body>
</html>

