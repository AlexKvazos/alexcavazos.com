export default function Home() {
  return (
    <main className="flex items-center py-[300px] px-10">
      <div className="lg:space-y-8 space-y-4 text-center mx-auto">
        <h1 className="lg:text-6xl text-4xl font-semibold text-neutral-50 font-mono">
          Alex Cavazos
        </h1>
        <p className="lg:text-lg text-neutral-400 font-mono max-w-md">
          Software Engineer based in México. Building for the web.
        </p>
        <div className="text-neutral-400 sm:gap-6 gap-3 font-mono flex flex-col sm:flex-row justify-center items-center">
          <a
            target="_blank"
            href="https://github.com/AlexKvazos"
            className="underline hover:text-white"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://twitter.com/alexcavazossh"
            className="underline hover:text-white"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="mailto:me@alexcavazos.com"
            className="underline hover:text-white"
          >
            me@alexcavazos.com
          </a>
        </div>
      </div>
    </main>
  );
}
