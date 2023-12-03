// Existing quizData array
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "What is the current stock symbol for Apple Inc.?",
      choices: ["AAPL", "GOOGL", "AMZN", "MSFT"],
      correctAnswer: "AAPL",
    },
    {
      question: "Which organ is responsible for producing insulin?",
      choices: ["Liver", "Kidneys", "Pancreas", "Heart"],
      correctAnswer: "Pancreas",
    },
    {
      question: "Who is often referred to as the 'Father of Computer Science'?",
      choices: ["Alan Turing", "Bill Gates", "Ada Lovelace", "Steve Jobs"],
      correctAnswer: "Alan Turing",
    },
    // Add 15 more questions as needed
    {
      question: "In which year was the World Wide Web (WWW) invented?",
      choices: ["1985", "1991", "2000", "1995"],
      correctAnswer: "1991",
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yuan", "Euro", "Yen", "Pound"],
      correctAnswer: "Yen",
    },
    {
      question: "What is the largest organ in the human body?",
      choices: ["Brain", "Liver", "Skin", "Heart"],
      correctAnswer: "Skin",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "Which state is known as the 'Sunshine State'?",
      choices: ["California", "Florida", "Texas", "Arizona"],
      correctAnswer: "Florida",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "J.K. Rowling", "George Orwell", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the capital of Brazil?",
      choices: ["Sao Paulo", "Brasília", "Rio de Janeiro", "Buenos Aires"],
      correctAnswer: "Brasília",
    },
    {
      question: "What is the currency of India?",
      choices: ["Rupee", "Ringgit", "Ruble", "Real"],
      correctAnswer: "Rupee",
    },
    {
      question: "In which year did the United States gain its independence?",
      choices: ["1776", "1789", "1801", "1750"],
      correctAnswer: "1776",
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who is known as the 'Father of Economics'?",
      choices: ["John Maynard Keynes", "Adam Smith", "Karl Marx", "Milton Friedman"],
      correctAnswer: "Adam Smith",
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Cell Membrane"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "Which Shakespeare play features the character Othello?",
      choices: ["Hamlet", "Macbeth", "Othello", "Romeo and Juliet"],
      correctAnswer: "Othello",
    },
    {
      question: "In which U.S. state is the Grand Canyon located?",
      choices: ["Arizona", "Nevada", "Colorado", "California"],
      correctAnswer: "Arizona",
    },
    {
      question: "What is the currency of China?",
      choices: ["Yuan", "Yen", "Won", "Ringgit"],
      correctAnswer: "Yuan",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Which programming language is often used for artificial intelligence?",
      choices: ["Java", "Python", "C++", "Ruby"],
      correctAnswer: "Python",
    },
    {
      question: "What is the smallest prime number?",
      choices: ["1", "2", "3", "5"],
      correctAnswer: "2",
    },
    {
      question: "Who wrote the novel '1984'?",
      choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.K. Rowling"],
      correctAnswer: "George Orwell",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "South Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Cell Membrane"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "Which ocean is the largest on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "In which year did the Berlin Wall fall?",
      choices: ["1985", "1989", "1991", "1995"],
      correctAnswer: "1989",
    },
    {
      question: "Who developed the theory of relativity?",
      choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who is known as the 'Father of Economics'?",
      choices: ["John Maynard Keynes", "Adam Smith", "Karl Marx", "Milton Friedman"],
      correctAnswer: "Adam Smith",
    },
  ];
    
  

  let currentQuestionIndex = 0;
  let score = 0;
  let consecutiveCorrectAnswers = 0;
  let timer;
  let currentLevel = 1;
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const timerElement = document.getElementById("timer");
  const levelElement = document.getElementById("level");
  
  function startQuiz() {
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice) => {
      const choiceBtn = document.createElement("button");
      choiceBtn.classList.add("choice-btn");
      choiceBtn.textContent = choice;
      choiceBtn.addEventListener("click", () => checkAnswer(choice));
      choicesElement.appendChild(choiceBtn);
    });
  
    levelElement.textContent = `Level: ${currentLevel}`;
    startTimer(); // Start the timer when a new question is displayed
  }
  
  function startTimer() {
    let timeLimit = 10; // Set the time limit for each question in seconds
  
    timerElement.textContent = `Time Remaining: ${timeLimit}s`; // Display the initial time
  
    timer = setInterval(() => {
      timeLimit--;
  
      if (timeLimit <= 0) {
        stopTimer();
        showNextQuestion();
      } else {
        timerElement.textContent = `Time Remaining: ${timeLimit}s`; // Update the displayed time
      }
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(timer);
  }

  window.onload = function () {
    const backgroundMusic = document.getElementById("background-music");

    function startBackgroundMusic() {
        // Set the volume to 50%
        backgroundMusic.volume = 0.5;

        // Play the background music
        backgroundMusic.play().catch(error => {
            console.error("Failed to play background music:", error);
        });
    }

    // Your existing code
    // ...
};

  function checkAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (choice === currentQuestion.correctAnswer) {
      score++;
      consecutiveCorrectAnswers++;
  
      // Check for consecutive correct answers
      if (consecutiveCorrectAnswers === 5) {
        showPopup("🔥 You are on fire!", "red");
        currentLevel = 2;
        levelElement.textContent = `Level: ${currentLevel}`;
      } else if (consecutiveCorrectAnswers === 10) {
        showPopup("⭐️ You are a star!", "yellow");
        currentLevel = 3;
        levelElement.textContent = `Level: ${currentLevel}`;
      }
  
      feedbackElement.textContent = "Correct!";
    } else {
      consecutiveCorrectAnswers = 0; // Reset consecutive correct answers count
      feedbackElement.textContent = `Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`;
    }
  
    stopTimer();
    disableChoices(); // Disable choices after an answer is chosen
    showNextQuestion();
  }
  
  function disableChoices() {
    // Disable all choice buttons to prevent changing the answer
    const choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach((btn) => {
      btn.removeEventListener("click", () => checkAnswer(btn.textContent));
      btn.disabled = true;
    });
  }
  
  function showPopup(message, bgColor) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;
    popup.style.backgroundColor = bgColor;
  
    document.body.appendChild(popup);
  
    // Remove the popup after 3 seconds
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 1500);
  }
  
  function showNextQuestion() {
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        resetQuiz();
        showQuestion();
      } else {
        endQuiz();
      }
    }, 2000); // Delay for 2 seconds before moving to the next question
  }
  
  function resetQuiz() {
    feedbackElement.textContent = "";
    nextBtn.style.display = "none";
  }
  
  function endQuiz() {
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
    <p>Your score is ${score} out of ${quizData.length}.</p>
    <p>Your final level is ${currentLevel}.</p>`;
  }
  
  // Call startQuiz to initiate the quiz
  startQuiz();
  