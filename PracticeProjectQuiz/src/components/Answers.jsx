import QUESTIONS from "../questions.js";
import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelectAnswer}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return <ul id="answers">
        {shuffledAnswers.current.map(answer => {
            const isSelected = selectedAnswer === answer;
            let cssClasses = '';
            if (answerState === 'answered' && isSelected) {
                cssClasses = 'selected'
            }
            if ((answerState === 'correct' || answerState === "wrong") && isSelected) {
                cssClasses = answerState
            }
            return <li key={answer} className="answer">
                <button className={cssClasses} onClick={() => onSelectAnswer(answer)} disabled={answerState!==''}>{answer} </button>
            </li>
        })}
    </ul>
}