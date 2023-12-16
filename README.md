<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hey! This is the message for you</title>
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
</head>
<body>
    <div class="wrapper">
        <h2 class="question">Hey Shane! Want to spend Christmas together ?</h2>
        <img class="gif" alt="gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZ5NXBxNXA1bXZ6bTl1a3ZnbXMzcHUwZXJ1NjJ0bGZ0aWd0ZHVyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XGCqVuqRRYsZu03pAl/giphy.gif"/>
        <div class="btn-group">
            <button class="yes-btn">Yes</button>
            <button class="no-btn">No</button>
        </div>
    </div>
    <script>
        const wrapper = document.querySelector(".wrapper");
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");
        const yesBtn = document.querySelector(".yes-btn");
        const noBtn = document.querySelector(".no-btn");

        let currentPage = 1;

        yesBtn.addEventListener("click", () => {
          
          if (currentPage === 1) {
            question.innerHTML = "Yay, looking forward to seeing you next week!";
            gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjh0eWN5aXZkOXlrOGttOGx6bnV2cml4bWxzdWlhZnJodnA0ODlwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VF5oyk7a2f8jTnBtfl/giphy.gif";
          } else if (currentPage === 2) {
            
            question.innerHTML = "There's one more thing I want to say..";
            gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjdvb2l3bW9lcWZlMXAxenJqZXQ0a2RhcjZqajYwaXY0NzhhNTVqMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/U7hDHs3hJ1w6qyHDCU/giphy.gif";
          }
          else if (currentPage === 3) {
            
            question.innerHTML = "I have been wondering, do you like me?";
            gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY24zdHhmaG5lMW9zamFzb2lmdmx3b3lidnl4cHM2dHl5N29yZWdkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lRSJ3oPf464AxLAV2x/giphy.gif";
            }
            else if (currentPage === 4) {
          
          question.innerHTML = "I appreciate that! I really like you a lot, Shane.";
          gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2NxNW1waDk1dW5wMHN3ejIxeG1sOWl3dzR4eWpueWM3endnd2k2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kDNSkrW5OR6parkuxe/giphy.gif";
           }
          
           currentPage++;
        });

        noBtn.addEventListener("mouseover", () => {
          const noBtnRect = noBtn.getBoundingClientRect();
          const maxX = window.innerWidth - noBtnRect.width;
          const maxY = window.innerHeight - noBtnRect.height;
        
          const randomX = Math.floor(Math.random() * maxX);
          const randomY = Math.floor(Math.random() * maxY);
        
          noBtn.style.left = randomX + "px";
          noBtn.style.top = randomY + "px";
        });
    </script>
</body>
</html>

