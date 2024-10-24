import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  variant = 'default',
  hover = false,
  loading = false,
  className = '',
  onClick,
  shadow = 'md',
  padding = 'default',
  border = false,
  rounded = 'lg',
  ...props
}) => {
  // Base styles that apply to all cards
  const baseStyles = 'relative overflow-hidden transition-all duration-300';
  
  // Variant styles
  const variants = {
    default: 'bg-white dark:bg-slate-800',
    outlined: 'bg-transparent border dark:border-slate-700',
    filled: 'bg-gray-50 dark:bg-slate-900',
    elevated: 'bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl',
    interactive: 'bg-white dark:bg-slate-800 cursor-pointer',
  };

  // Shadow options
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // Padding options
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    default: 'p-6',
    lg: 'p-8',
  };

  // Border radius options
  const roundedOptions = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-2xl',
  };

  // Hover effects
  const hoverStyles = hover ? 'transform hover:-translate-y-1 hover:shadow-lg' : '';

  // Border styles
  const borderStyles = border ? 'border border-gray-200 dark:border-gray-700' : '';

  // Combine all styles
  const cardStyles = [
    baseStyles,
    variants[variant],
    shadows[shadow],
    paddings[padding],
    roundedOptions[rounded],
    hoverStyles,
    borderStyles,
    className,
    onClick ? 'cursor-pointer' : '',
  ].join(' ');

  // Loading state component
  const LoadingState = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );

  return (
    <div
      className={cardStyles}
      onClick={onClick}
      {...props}
    >
      {loading ? <LoadingState /> : children}
    </div>
  );
};

// PropTypes for better development experience
Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled', 'elevated', 'interactive']),
  hover: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg']),
  border: PropTypes.bool,
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
};

// Usage Examples Component
export const CardExamples = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Default Card */}
      <Card>
        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This is a default card with standard styling.
        </p>
      </Card>

      {/* Outlined Card */}
      <Card variant="outlined" hover>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          An outlined card with hover effect.
        </p>
      </Card>

      {/* Elevated Card */}
      <Card variant="elevated" padding="lg" rounded="xl">
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          An elevated card with extra padding and rounded corners.
        </p>
      </Card>

      {/* Interactive Card */}
      <Card
        variant="interactive"
        hover
        onClick={() => alert('Card clicked!')}
      >
        <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Click me! I'm an interactive card.
        </p>
      </Card>

      {/* Loading Card */}
      <Card loading>
        <h3 className="text-lg font-semibold mb-2">Loading Card</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This content won't be visible while loading.
        </p>
      </Card>
    </div>
  );
};

export default Card;