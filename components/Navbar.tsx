// icons
import { FiGithub, FiInstagram } from 'react-icons/fi';

const Navbar = () => {
  const social = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/AlexKvazos',
      label: 'GitHub',
    },
    {
      icon: <FiInstagram />,
      href: 'https://instagram.com/cavacodes',
      label: 'Instagram',
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <a href="/">alexcavazos.com</a>
      <div className="flex space-x-2 text-gray-700 justify-center">
        {social.map((socialItem) => (
          <a
            rel="noopener"
            key={socialItem.href}
            target="_blank"
            aria-label={socialItem.label}
            className="hover:text-black p-2 hover:bg-gray-100 rounded-md text-xl"
            href={socialItem.href}
          >
            {socialItem.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
