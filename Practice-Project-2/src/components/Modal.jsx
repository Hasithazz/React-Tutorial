import { useRef } from 'react';
import { useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ children, buttonLabel, ref }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonLabel}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}
