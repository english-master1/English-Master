import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="text-center py-28">
        <h1 className="text-6xl font-bold">
          Learn English Faster
        </h1>

        <p className="text-xl text-gray-400 mt-6">
          Interactive lessons, quizzes and certificates.
        </p>

        <button className="mt-10 bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700">
          Start Learning
        </button>
      </section>
    </div>
  );
}