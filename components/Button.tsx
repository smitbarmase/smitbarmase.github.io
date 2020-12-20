interface ButtonInterface {
  link: string;
  className?: string;
}

const Button: React.FC<ButtonInterface> = ({ children, link, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex items-center py-0.5 px-3 rounded border border-gray-200 bg-white text-xs hover:bg-gray-50 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
