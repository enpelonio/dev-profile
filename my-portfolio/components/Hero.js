import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center max-w-3xl px-4">
      <h1 className="text-5xl font-heading font-bold text-primary mb-4">
        Hi, I'm Ervin Niño Pelonio
      </h1>
      <p className="text-xl font-body text-neutral mb-6">
        A versatile full-stack developer with an eye for quality and details.
        Whether it's building scalable web applications or leveraging AI to
        solve real-world problems, I bring a passion for clean, efficient code
        to every project. Let's build something great together.
      </p>

      {/* Buttons */}
      <div className="space-x-4">
        <Link href="#projects" legacyBehavior>
          <a className="bg-primary text-white font-button py-3 px-6 rounded hover:bg-hover">
            Explore My Work
          </a>
        </Link>
        <Link href="#contact" legacyBehavior>
          <a className="bg-secondary text-white font-button py-3 px-6 rounded hover:bg-hover">
            Let’s Connect
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
