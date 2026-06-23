"use client";

import { useState } from "react";
import api from "@/services/api";
import { College } from "@/types/college";

export default function PredictorPage() {

  const [exam, setExam] = useState("JEE Main");
  const [rank, setRank] = useState("");

  const [result, setResult] = useState<College[]>([]);

  async function predict() {

    try {

      const res = await api.post("/predictor", {

        exam,
        rank: Number(rank),

      });

      setResult(res.data.recommendedColleges);

    } catch (err) {

      console.log(err);

    }

  }

  return (

    <main className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">

        College Predictor

      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <label className="font-semibold">
          Exam
        </label>

        <select
          className="border rounded-lg p-3 w-full mt-2 mb-6"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
        >
          <option>JEE Main</option>
          <option>JEE Advanced</option>
          <option>NEET</option>
        </select>

        <label className="font-semibold">
          Rank
        </label>

        <input
          type="number"
          className="border rounded-lg p-3 w-full mt-2"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />

        <button
          onClick={predict}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl mt-8"
        >
          Predict Colleges
        </button>

      </div>

      {result.length > 0 && (

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-5">

            Recommended Colleges

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {result.map((college) => (

              <div
                key={college.id}
                className="bg-white rounded-xl shadow p-5"
              >

                <h2 className="text-2xl font-bold text-blue-600">

                  {college.name}

                </h2>

                <p className="mt-3">

                  📍 {college.location}

                </p>

                <p>

                  ⭐ {college.rating}

                </p>

              </div>

            ))}

          </div>

        </div>

      )}

    </main>

  );

}