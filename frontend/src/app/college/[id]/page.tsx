"use client";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/services/api";
import { College } from "@/types/college";
import { useRouter } from "next/navigation";

export default function CollegeDetails() {

  const params = useParams();

  const id = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [college, setCollege] = useState<College | null>(null);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {

    if (id) {
      fetchCollege();
    }

  }, [id]);

  async function fetchCollege() {

    try {

      const res = await api.get(`/colleges/${id}`);

      console.log(res.data);

      setCollege(res.data);

    } catch (err) {

      console.error(err);

      setCollege(null);

    } finally {

      setLoading(false);

    }

  }
  async function saveCollege() {
    try {
      await api.post("/saved", {
        collegeId: college?.id,
      });

      toast.success("College Saved");
    } catch (error) {
      toast.error("Please Login First");
    }
  }

  if (loading) {

    return (
      <div className="max-w-6xl mx-auto p-10">
        Loading...
      </div>
    );

  }

  if (!college) {

    return (
      <div className="max-w-6xl mx-auto p-10 text-red-600 text-3xl">
        College not found.
      </div>
    );

  }

  return (

    <main className="max-w-6xl mx-auto p-10">

      <div className="bg-blue-600 text-white rounded-2xl p-10">

        <h1 className="text-5xl font-bold">
          {college.name}
        </h1>

        <p className="mt-4">
          📍 {college.location}
        </p>

        <p>
          ⭐ {college.rating}
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <div className="md:col-span-2">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold mb-4">
              Overview
            </h2>

            <p>
              {college.overview}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-3xl font-bold mb-4">
              Placements
            </h2>

            <p>
              Average Package :
              ₹ {college.averagePackage.toLocaleString()}
            </p>

            <p className="mt-2">
              Highest Package :
              ₹ {college.highestPackage.toLocaleString()}
            </p>

          </div>

        </div>

        <div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold">
              Fees
            </h2>

            <p className="text-3xl text-blue-600 mt-4">
              ₹ {college.fees.toLocaleString()}
            </p>

            <button
              onClick={saveCollege}
              className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl"
            >
              ❤️ Save College
            </button>

            <button
              onClick={() => router.push("/compare")}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl"
            >
              Compare
            </button>

          </div>

        </div>

      </div>

    </main>

  );
}