document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const quizArea = document.getElementById('quizArea');
    const modeBtn = document.getElementById('modeBtn');
    const repetitionBtn = document.getElementById('repetitionBtn');
    const themeBtn = document.getElementById('themeBtn');
    const progressTracker = document.getElementById('progressTracker');
    const remainingCount = document.getElementById('remainingCount');
    const completionMessage = document.getElementById('completionMessage');
    const restartBtn = document.getElementById('restartBtn');
    const nextBtn = document.createElement('button');
    nextBtn.id = 'nextBtn';
    nextBtn.textContent = 'Next Question';
    nextBtn.classList.add('hidden');
    quizArea.parentNode.insertBefore(nextBtn, quizArea.nextSibling);

    // State
    let currentMode = 'learning';
    let retryQueue = [];
    let incorrectAnswers = [];
    let currentQuestionIndex = 0;
    let displayedQuestions = [];
    
    // Initialize the app
    renderQuiz();
    
    // Event Listeners
    modeBtn.addEventListener('click', () => {
        if (currentMode !== 'learning') {
            currentMode = 'learning';
            modeBtn.classList.add('active');
            repetitionBtn.classList.remove('active');
            resetQuiz();
            renderQuiz();
        }
    });
    
    repetitionBtn.addEventListener('click', () => {
        if (currentMode !== 'repetition') {
            currentMode = 'repetition';
            repetitionBtn.classList.add('active');
            modeBtn.classList.remove('active');
            resetQuiz();
            renderQuiz();
        }
    });
    
    themeBtn.addEventListener('click', toggleTheme);
    restartBtn.addEventListener('click', () => {
        completionMessage.classList.add('hidden');
        resetQuiz();
        renderQuiz();
    });
    
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < displayedQuestions.length) {
            renderCurrentQuestion();
        } else {
            if (currentMode === 'repetition' && incorrectAnswers.length > 0) {
                retryQueue = [...incorrectAnswers];
                incorrectAnswers = [];
                currentQuestionIndex = 0;
                displayedQuestions = [...retryQueue];
                shuffleArray(displayedQuestions);
                progressTracker.classList.remove('hidden');
                remainingCount.textContent = retryQueue.length;
                renderCurrentQuestion();
            } else {
                showCompletionMessage();
            }
        }
    });
    
    // Functions
    function renderQuiz() {
        quizArea.innerHTML = '';
        nextBtn.classList.add('hidden');
        currentQuestionIndex = 0;
        
        if (currentMode === 'repetition') {
            if (retryQueue.length === 0) {
                // First run in repetition mode
                retryQueue = [...questions];
                incorrectAnswers = [];
                shuffleArray(retryQueue);
            }
            
            if (retryQueue.length === 0) {
                // No questions available
                quizArea.innerHTML = '<p>No questions available.</p>';
                return;
            }
            
            progressTracker.classList.remove('hidden');
            remainingCount.textContent = retryQueue.length;
            displayedQuestions = [...retryQueue];
        } else {
            // Learning mode
            progressTracker.classList.add('hidden');
            incorrectAnswers = [];
            
            if (questions.length === 0) {
                quizArea.innerHTML = '<p>No questions available.</p>';
                return;
            }
            
            displayedQuestions = [...questions];
            shuffleArray(displayedQuestions);
        }
        
        renderCurrentQuestion();
    }
    
    function renderCurrentQuestion() {
        quizArea.innerHTML = '';
        const question = displayedQuestions[currentQuestionIndex];
        
        if (currentMode === 'learning') {
            createLearningCard(question);
            // Show next button if there are more questions
            if (displayedQuestions.length > 1) {
                nextBtn.classList.remove('hidden');
            }
        } else {
            createQuizCard(question);
            if (displayedQuestions.length > 1) {
                nextBtn.classList.remove('hidden');
            }
        }
    }
    
    function createLearningCard(question) {
        const card = document.createElement('div');
        card.className = 'question-card';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        card.appendChild(questionText);
        
        const answerContainer = document.createElement('div');
        answerContainer.className = 'answer-container';
        
        const answerLabel = document.createElement('div');
        answerLabel.className = 'answer-label';
        answerLabel.textContent = 'Correct Answer:';
        
        const answerText = document.createElement('div');
        answerText.className = 'answer-text correct';
        answerText.innerHTML = `${question.correctAnswer} <i class="fas fa-check"></i>`;
        
        answerContainer.appendChild(answerLabel);
        answerContainer.appendChild(answerText);
        card.appendChild(answerContainer);
        
        quizArea.appendChild(card);
    }
    
    function createQuizCard(question) {
        const card = document.createElement('div');
        card.className = 'question-card';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        card.appendChild(questionText);
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        question.options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => handleQuizAnswer(optionBtn, option, question));
            optionsContainer.appendChild(optionBtn);
        });
        
        card.appendChild(optionsContainer);
        quizArea.appendChild(card);
    }
    
    function handleQuizAnswer(optionBtn, selectedOption, question) {
        // Disable all options for this question
        const options = optionBtn.parentElement.querySelectorAll('.option-btn');
        options.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled');
        });
        
        if (selectedOption === question.correctAnswer) {
            // Correct answer
            optionBtn.classList.add('correct');
            optionBtn.innerHTML = `${selectedOption} <i class="fas fa-check"></i>`;
            optionBtn.classList.add('bounce');
            
            // Remove from retry queue
            retryQueue = retryQueue.filter(q => q.question !== question.question);
            remainingCount.textContent = retryQueue.length;
            
            // Auto-proceed to next question after delay for correct answer
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < displayedQuestions.length) {
                    renderCurrentQuestion();
                } else if (incorrectAnswers.length > 0) {
                    // Move to retry incorrect questions
                    retryQueue = [...incorrectAnswers];
                    incorrectAnswers = [];
                    currentQuestionIndex = 0;
                    displayedQuestions = [...retryQueue];
                    shuffleArray(displayedQuestions);
                    remainingCount.textContent = retryQueue.length;
                    renderCurrentQuestion();
                } else {
                    showCompletionMessage();
                }
            }, 1000); // 1 second delay for correct answer
        } else {
            // Incorrect answer
            optionBtn.classList.add('incorrect');
            optionBtn.innerHTML = `${selectedOption} <i class="fas fa-times"></i>`;
            optionBtn.classList.add('shake');
            
            // Highlight correct answer
            options.forEach(btn => {
                if (btn.textContent === question.correctAnswer) {
                    btn.classList.add('correct');
                    btn.innerHTML = `${question.correctAnswer} <i class="fas fa-check"></i>`;
                }
            });
            
            incorrectAnswers.push(question);
            
            // Show next button for incorrect answer
            nextBtn.classList.remove('hidden');
        }
    }
    
    function resetQuiz() {
        retryQueue = [];
        incorrectAnswers = [];
        currentQuestionIndex = 0;
        displayedQuestions = [];
        completionMessage.classList.add('hidden');
        // Re-shuffle questions and options
        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.options));
    }
    
    function showCompletionMessage() {
        nextBtn.classList.add('hidden');
        completionMessage.classList.remove('hidden');
        createConfetti();
    }
    
    function createConfetti() {
        const confetti = document.querySelector('.confetti');
        confetti.innerHTML = '';
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.backgroundColor = getRandomColor();
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = '-10px';
            particle.style.opacity = '0';
            
            const animation = particle.animate([
                { 
                    opacity: 1,
                    top: '-10px',
                    transform: 'rotate(0deg)'
                },
                { 
                    opacity: 1,
                    top: `${Math.random() * 100 + 50}%`,
                    transform: 'rotate(360deg)',
                    left: `${Math.random() * 100}%`
                },
                { 
                    opacity: 0,
                    top: '110%'
                }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
            });
            
            confetti.appendChild(particle);
        }
    }
    
    function getRandomColor() {
        const colors = ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#8a2be2', '#ff69b4'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
