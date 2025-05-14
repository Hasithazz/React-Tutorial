import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  let timerId = useRef();
  const dialog = useRef(null);

  const isTimeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerId.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timerId.current = setInterval(() => {
      setTimeRemaining((prev) => {
        return prev - 10;
      });
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timerId.current);
  }
  return (
    <>
      {
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          timeRemaining={timeRemaining}
          onReset={handleReset}
        />
      }
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimeActive ? handleStop : handleStart}>
            {isTimeActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimeActive ? 'active' : undefined}>
          Time is {isTimeActive ? 'running....' : 'inactive'}
        </p>
      </section>
    </>
  );
}
