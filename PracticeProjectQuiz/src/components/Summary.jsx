import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({userAnswers}) {

    let correctCount = 0;
    let skippedCount = 0;
    let incorrectCount = 0;
    let index = 0;
    for (const userAnswer of userAnswers) {
        if (userAnswer === null) skippedCount++; else if ((userAnswer === QUESTIONS[index].answers[0])) correctCount++; else incorrectCount++;
        index++;
    }
    const totalAnswerCount = correctCount + incorrectCount + skippedCount;
    const correctPercentage = (correctCount / totalAnswerCount) * 100;
    const incorrectPercentage = (incorrectCount / totalAnswerCount) * 100;
    const skippedPercentage = (skippedCount / totalAnswerCount) * 100;

    return <div id="summary"><img src={quizCompleteImg} alt="Quiz Completed"/><h2>Quiz Completed!!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{Math.round(skippedPercentage)}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{Math.round(correctPercentage)}%</span>
                <span className="text">correct</span>
            </p>
            <p>
                <span className="number">{Math.round(incorrectPercentage)}%</span>
                <span className="text">incorrect</span>
            </p>
        </div>
        <ol>{userAnswers.map((answer, index) => {
            let cssClassName = 'user-answer';
            if (answer === null) cssClassName += ' skipped'; else if (answer === QUESTIONS[index].answers[0]) cssClassName += ' correct'; else cssClassName += ' wrong';
            return <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClassName}>{answer ?? 'Skipped'}</p>
            </li>
        })}

        </ol>
    </div>
}