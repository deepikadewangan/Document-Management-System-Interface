import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'primary',
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  // Ensure progress is between 0 and 100
  const safeProgress = Math.min(100, Math.max(0, progress));
  
  const colorStyles = {
    primary: 'bg-indigo-600',
    secondary: 'bg-purple-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600',
  };
  
  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${colorStyles[color]} ${sizeStyles[size]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${safeProgress}%` }}
          role="progressbar"
          aria-valuenow={safeProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-right mt-1 text-gray-600">{safeProgress}%</p>
      )}
    </div>
  );
};

export default ProgressBar;