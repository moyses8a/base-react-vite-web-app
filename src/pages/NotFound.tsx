import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="flex justify-center items-center h-screen w-full bg-mountain-meadow-500">
      <article className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-white">
          oops! it&apos;s a dead end
        </h1>
        <Link to="/" className="font-bold">
          Back Home
        </Link>
      </article>
    </section>
  );
}

export default NotFound;
