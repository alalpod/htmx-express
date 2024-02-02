const Count = require('./count');
const ToDoList = require('./todoList');

<html>
<head>
    <meta charset="UTF-8"/>
    <title>HTMX Express example</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/htmx.org@1.9.10"
            integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
            crossOrigin="anonymous"></script>
</head>
<body>
<Count/>
<ToDoList todos={todos} />

<link rel="stylesheet" href="/public/css/tokens.css"/>
<link rel="stylesheet" href="/public/css/styles.css"/>
</body>
</html>
