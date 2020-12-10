// icons
import { FiGithub, FiInstagram } from 'react-icons/fi';

const Navbar = () => {
  const social = [
    { icon: <FiGithub />, href: 'htps://github.com/AlexKvazos' },
    { icon: <FiInstagram />, href: 'https://instagram.com/cavacodes' },
  ];

  return (
    <div className="flex justify-between items-center">
      <a href="/">alexcavazos.com</a>
      <div className="flex space-x-2 text-gray-700 justify-center">
        {social.map((socialItem) => (
          <a
            key={socialItem.href}
            target="_blank"
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
