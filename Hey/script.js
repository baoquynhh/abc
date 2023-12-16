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