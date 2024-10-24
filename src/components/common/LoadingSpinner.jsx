// src/components/common/LoadingSpinner.jsx
import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center">
      <Loader className={`${sizeClasses[size]} animate-spin text-primary-600`} />
    </div>
  );
};

export default LoadingSpinner;