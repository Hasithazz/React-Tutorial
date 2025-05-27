import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAddProject, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      dueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: title,
      description: description,
      dueDate: dueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonLabel={'Close'}>
        <h1 className="text-xl font-bold text-stone-600 my-4">
          Invalid Input!
        </h1>
        <p className="text-stone-500 mb-4">Please validate your inputs.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={'Title'} type="text"></Input>
          <Input ref={descriptionRef} label={'Description'} textArea></Input>
          <Input ref={dueDateRef} label={'Due Date'} type="date"></Input>
        </div>
      </div>
    </>
  );
}
