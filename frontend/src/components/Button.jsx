const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-2xl px-5 py-3 font-medium transition hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;