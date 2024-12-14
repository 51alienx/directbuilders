import React from "react";

type ToastProps = {
  message: string; // The message to display in the toast
  type: "success" | "error"; // The type of toast (determines the color)
  onClose: () => void; // Callback function to close the toast
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 md:px-8 md:py-4 rounded shadow-lg text-white 
      ${type === "success" ? "bg-green-500" : "bg-red-500"} transition-opacity 
      animate-popup`}
    >
      <span className="text-sm md:text-base">{message}</span>
      <button
        className="ml-4 text-xs md:text-sm underline"
        onClick={onClose}
        aria-label="Close toast"
      >
        Close
      </button>
    </div>
  );
};

export default Toast;