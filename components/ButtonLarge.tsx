interface ButtonInterface {
  link: string;
}

const ButtonLarge: React.FC<ButtonInterface> = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center py-2 px-3 rounded border border-gray-200 bg-white text-xs hover:bg-gray-50"
    >
      {children}
    </a>
  );
};

export default ButtonLarge;
