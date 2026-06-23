import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-8 md:p-14 mb-12">

      <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
        🇮🇳 India's Smart College Discovery Platform
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">

        Find Your

        <br />

        Dream College

      </h1>

      <p className="mt-6 text-lg md:text-xl max-w-3xl text-blue-100">

        Compare colleges, explore placements, predict admissions,
        read reviews and make better career decisions.

      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <button className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Explore Colleges
        </button>

        <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
          Compare Now
        </button>

      </div>

      <HeroStats />

    </section>
  );
}