import Head from 'next/head';

// components
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Experience from 'components/Experience';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <div className="dark:bg-dark">
      <Head>
        <title>Alex Cavazos | Full-Stack Javascript Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a Full-Stack JavaScript developer from Monterrey, Mexico. I've been
        passionate about technology my entire life and have been working as a
        professional developer for over five years."
        />
      </Head>

      <div className="max-w-3xl mx-auto pt-6 px-6">
        <Navbar />
        <Hero />
        <hr />
        <About />
        <hr />
        <Experience />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
