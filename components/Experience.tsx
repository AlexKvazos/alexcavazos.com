// components
import Link from 'components/core/Link';

import { FiGitCommit } from 'react-icons/fi';

const Experience = () => {
  const items = [
    {
      caption: 'Remote',
      company: 'Zipdev, LLC',
      href: 'https://zipdev.com',
      subheader: 'Jan 2020 - Present',
      title: 'Frontend Engineer',
    },
    {
      caption: 'Remote',
      company: 'Beta Acid, LLC',
      href: 'https://betaacid.co',
      subheader: 'Jul 2019 - Dec 2019',
      title: 'Frontend Engineer',
    },
    {
      caption: 'Remote',
      company: 'BuildFire, Inc',
      href: 'https://buildfire.com',
      subheader: 'Oct 2017 - Jul 2019',
      title: 'Frontend Engineer',
    },
    {
      caption: 'Remote',
      company: 'CubedHost, LLC',
      href: 'https://cubedhost.com',
      subheader: 'Mar 2015 - Oct 2017',
      title: 'Full-Stack Javascript Engineer',
    },
  ];

  return (
    <div className="py-14">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      {items.map((item) => (
        <div className="flex items-center py-3">
          <div className="transform rotate-90 w-4 h-4 mr-6 text-2xl">
            <FiGitCommit />
          </div>
          <div>
            <a
              target="_blank"
              className="text-blue-700 font-bold text-lg"
              href={item.href}
            >
              {item.company}
            </a>
            <p className="font-bold">{item.title}</p>
            <p className="text-gray-700">{item.subheader}</p>
            <p className="text-sm text-gray-500">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
