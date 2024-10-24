// src/utils/toast.js
import { toast } from 'react-toastify';

// Custom toast configurations
export const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Custom toast functions with consistent styling
export const showToast = {
  success: (message) => {
    toast.success(message, {
      ...toastConfig,
      className: 'bg-green-50 dark:bg-green-900',
      progressClassName: 'bg-green-500',
    });
  },
  
  error: (message) => {
    toast.error(message, {
      ...toastConfig,
      className: 'bg-red-50 dark:bg-red-900',
      progressClassName: 'bg-red-500',
    });
  },
  
  info: (message) => {
    toast.info(message, {
      ...toastConfig,
      className: 'bg-blue-50 dark:bg-blue-900',
      progressClassName: 'bg-blue-500',
    });
  },
  
  warning: (message) => {
    toast.warning(message, {
      ...toastConfig,
      className: 'bg-yellow-50 dark:bg-yellow-900',
      progressClassName: 'bg-yellow-500',
    });
  },
};

// Custom Toast Component
export const CustomToast = ({ type, message }) => {
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{icons[type]}</span>
      <p className="font-medium">{message}</p>
    </div>
  );
};