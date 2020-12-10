// components
import Link from 'components/core/Link';

const About = () => {
  return (
    <div className="py-14">
      <h3 className="text-2xl font-bold mb-6">About</h3>
      <p className="text-gray-700 leading-loose mb-4">
        I was born and raised in Monterrey, Mexico, and I've lived there my
        entire life. I got interested in technology since very young, captivated
        by the curiosity of how everything worked. I started teaching myself web
        development when I was 15 years old using online platforms like{' '}
        <Link rel="noopener" target="_blank" href="https://www.codecademy.com/">
          Codecademy
        </Link>{' '}
        and{' '}
        <Link rel="noopener" target="_blank" href="https://teamtreehouse.com">
          Treehouse
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-loose mb-4">
        I worked on multiple freelance projects to improve my technical,
        business and people skills. Two years later I landed my first formal
        contract to work remotely for a company in Dallas, TX which marked the
        start of my professional career as a self-taught developer. Since then,
        I've been working as a contractor for multiple U.S. based companies
        primarily as a Frontend Engineer.
      </p>
      <p className="text-gray-700 leading-loose">
        I'm very passionate about what I do and enjoy sharing what I learn. I've
        been a speaker at multiple tech meetups in my city, advocating on modern
        web technologies and best practices, and participated as an instructor
        at a coding bootcamp for{' '}
        <Link rel="noopener" target="_blank" href="https://cerouno.io/">
          CeroUno
        </Link>
        .
      </p>
    </div>
  );
};

export default About;
