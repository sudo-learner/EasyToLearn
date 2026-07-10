// EasyToLearn — Quiz Engine
// renderQuiz(questions, container, onCompleteCallback)
// onCompleteCallback fires when the user has answered every question
// (regardless of correct/incorrect) so completion can be tracked.

const LETTERS = ['A','B','C','D'];

function renderQuiz(quizArray, containerEl, onComplete) {
  // Store callback on container so handleQuizAnswer can call it
  containerEl._onComplete = onComplete || null;

  containerEl.innerHTML = quizArray.map((q, qi) => `
    <div class="quiz-q" data-qi="${qi}">
      <div class="quiz-q-text">${qi + 1}. ${q.q}</div>
      ${q.options.map((opt, oi) => `
        <button class="quiz-option"
          data-qi="${qi}" data-oi="${oi}"
          data-letter="${LETTERS[oi] || oi}"
          onclick="handleQuizAnswer(this, ${qi}, ${oi}, ${q.correct})">${opt}</button>
      `).join('')}
      <div class="quiz-explain" id="explain-${containerEl.id || 'q'}-${qi}">${q.explain}</div>
    </div>
  `).join('') + `<div class="quiz-score" id="quiz-score-final"></div>`;

  containerEl.dataset.total    = quizArray.length;
  containerEl.dataset.score    = 0;
  containerEl.dataset.answered = 0;
}

function handleQuizAnswer(btn, qIndex, chosenIndex, correctIndex) {
  const questionBlock  = btn.closest('.quiz-q');
  const scoreContainer = btn.closest('[data-total]');
  if (questionBlock.dataset.answered === 'true') return;
  questionBlock.dataset.answered = 'true';

  // Mark options
  questionBlock.querySelectorAll('.quiz-option').forEach(opt => {
    opt.disabled = true;
    const oi = parseInt(opt.dataset.oi);
    if (oi === correctIndex) opt.classList.add('correct');
    else if (oi === chosenIndex) opt.classList.add('incorrect');
  });

  // Show explanation
  questionBlock.querySelector('.quiz-explain').classList.add('show');

  // Update score + answered count
  let score    = parseInt(scoreContainer.dataset.score);
  let answered = parseInt(scoreContainer.dataset.answered) + 1;
  if (chosenIndex === correctIndex) score++;
  scoreContainer.dataset.score    = score;
  scoreContainer.dataset.answered = answered;

  const total = parseInt(scoreContainer.dataset.total);

  // All questions answered → show score + fire completion callback
  if (answered === total) {
    const el = scoreContainer.querySelector('#quiz-score-final');
    el.style.display = 'block';
    const pct = Math.round((score / total) * 100);
    el.textContent = score === total
      ? `🎉 Perfect! ${score} / ${total} — outstanding!`
      : `Score: ${score} / ${total} (${pct}%) — review the explanations above.`;

    // Fire completion regardless of score — topic is "done" when all questions attempted
    if (typeof scoreContainer._onComplete === 'function') {
      scoreContainer._onComplete();
    }
  }
}
