import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({
  ref,
  timeRemaining,
  targetTime,
  onReset,
}) {
  const dialog = useRef();
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  const isLost = timeRemaining <= 0;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>You {!isLost ? 'Won' : 'Lost'}</h2>
      {!isLost && <h2>Your Score = {score}</h2>}
      <p>
        Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{(timeRemaining / 1000).toFixed(2)} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
