// Button.jsx
export const Button = ({ variant = 'primary', children, ...props }) => {
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 rounded-lg text-base font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200'
    };
  
    return (
      <button className={variants[variant]} {...props}>
        {children}
      </button>
    );
  };

  export default Button;