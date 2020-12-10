// components
import Link from 'components/core/Link';

const Hero = () => {
  return (
    <div className="py-14">
      <h1 className="text-3xl md:text-5xl tracking-tight font-bold dark:text-white mb-7">
        Hey, I'm Alex Cavazos.
      </h1>
      <h2 className="text-gray-600 leading-relaxed dark:text-gray-400 mb-4">
        I'm a Full-Stack JavaScript developer from Monterrey, Mexico. I've been
        passionate about technology my entire life and have been working as a
        professional developer for over five years.
      </h2>
      <p className="leading-loose text-gray-600 mb-7">
        You can check out some of my code on{' '}
        <Link target="_blank" href="https://github.com/AlexKvazos">
          GitHub
        </Link>
        . I document my journey on{' '}
        <Link target="_blank" href="https://instagram.com/cavacodes">
          Instagram
        </Link>{' '}
        where I also share tips, tricks, and resources to help out other
        developers.
      </p>
      <div className="flex space-x-2">
        <a href="mailto:me@alexcavazos.com">
          <button className="py-2 px-5 text-white rounded-md bg-blue-700 hover:bg-blue-600">
            Let's Talk
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
