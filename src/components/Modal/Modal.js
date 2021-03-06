import { Card } from '../Card/Card';

function Modal({
  title,
  bgColor,
  close,
  modalClass,
  visibility,
  toggleVisibility,
  content,
  classSign,
}) {
  console.log(close);
  console.log(visibility);
  return (
    <div
      className={`md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 modal ${modalClass} ${classSign} ${
        visibility ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`flex justify-between border-b border-gray-100 px-5 py-4 ${bgColor}`}
      >
        <div>
          <span className="font-bold text-gray-700 text-lg">{title}</span>
        </div>
        <div>
          <button
            onClick={() => toggleVisibility(false)}
            className="text-white hover:bg-white hover:text-red-600 transition duration-150 bg-red-800 mr-1 rounded text-sm py-2 px-3 "
            type="button"
          >
            Close
          </button>
        </div>
      </div>
      <div className="px-10 py-5 text-gray-600">{content}</div>
    </div>
  );
}

export default Modal;
