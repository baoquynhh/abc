<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hey! This is the message for you</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: whitesmoke;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}


.gif {
    height: 100%;
    width: 100%;
}

h2 {
    text-align: center;
    font-size: 1.5em;
    color: #e94d58;
    margin: 15px 0;
}

.btn-group {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

button {
    position: absolute;
    width: 150px;
    height: inherit;
    color: white;
    font-size: 1.2em;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 0 0 2px transparent;
}

button:nth-child(1) {
    margin-left: -200px;
    background: #e94d58;
    box-shadow: 0 0 0 2px #e94d58;
}

button:nth-child(2) {
    margin-right: -200px;
    background: white;
    color: #e94d58;
    box-shadow: 0 0 0 2px #e94d58;
}

.container {
    border: 6px solid #e94d58;
    padding: 20px;
}
</style>


<body>
    <div class="wrapper">
        <h2 class="question">Hey Shane! Want to spend Christmas together ?</h2>
        <img class="gif" alt="gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZ5NXBxNXA1bXZ6bTl1a3ZnbXMzcHUwZXJ1NjJ0bGZ0aWd0ZHVyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XGCqVuqRRYsZu03pAl/giphy.gif"/>
        <div class="btn-group">
            <button class="yes-btn">Yes</button>
            <button class="no-btn">No</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
