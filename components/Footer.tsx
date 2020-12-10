import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

const Footer = () => {
  const social = [
    { href: 'https://twitter.com/cavacodes', icon: <FiTwitter /> },
    { href: 'https://github.com/AlexKvazos', icon: <FiGithub /> },
    { href: 'https://instagram.com/cavacodes', icon: <FiInstagram /> },
    {
      href: 'https://www.linkedin.com/in/alejandro-cavazos-76a488b9/',
      icon: <FiLinkedin />,
    },
    { href: 'mailto:me@alexcavazos.com', icon: <FiMail /> },
  ];

  return (
    <div className="py-7">
      <p className="text-center mb-3 text-gray-500">
        Developed with Tailwind.css and Next.js
      </p>
      <p className="text-center mb-5 text-gray-500">
        This website is open source on{' '}
        <a
          target="_blank"
          className="text-blue-700"
          href="https://github.com/AlexKvazos/alexcavazos.com"
        >
          GitHub
        </a>
      </p>
      <div className="flex justify-center space-x-4 text-xl">
        {social.map((item) => (
          <a
            target="_blank"
            href={item.href}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
