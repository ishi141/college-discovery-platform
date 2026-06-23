"use client";

import Link from "next/link";
import {
  MapPin,
  IndianRupee,
  Star,
  Heart,
  TrendingUp,
} from "lucide-react";

import { College } from "@/types/college";

interface Props {
  college: College;
}

export default function CollegeCard({ college }: Props) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

      {/* Banner */}

      <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-700">

        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
          Top Rated
        </div>

        <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-red-100 transition">

          <Heart size={18} />

        </button>

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold group-hover:text-blue-600 transition">

          {college.name}

        </h2>

        <div className="flex items-center gap-2 mt-4 text-gray-600">

          <MapPin size={18} />

          {college.location}

        </div>

        <div className="flex items-center gap-2 mt-3">

          <IndianRupee size={18} />

          ₹ {college.fees.toLocaleString()}

        </div>

        <div className="flex items-center gap-2 mt-3">

          <TrendingUp size={18} />

          Avg Package ₹ {college.averagePackage.toLocaleString()}

        </div>

        <div className="flex items-center gap-2 mt-3 text-yellow-500">

          <Star fill="currentColor" size={18} />

          {college.rating}

        </div>

        <p className="mt-5 text-gray-500 line-clamp-3">

          {college.overview}

        </p>

        <div className="flex gap-3 mt-6">

          <Link
            href={`/college/${college.id}`}
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            View Details
          </Link>

          <button className="border border-blue-600 text-blue-600 px-5 rounded-xl hover:bg-blue-50">

            Compare

          </button>

        </div>

      </div>

    </div>
  );
}