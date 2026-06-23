"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import CollegeCard from "@/components/CollegeCard";
import Pagination from "@/components/Pagination";
import api from "@/services/api";
import { College } from "@/types/college";
import Loader from "@/components/Loader";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchColleges();
  }, [search, location, rating, page]);

  async function fetchColleges() {
    try {
      setLoading(true);

      const res = await api.get("/colleges", {
        params: {
          page,
          limit: 6,
          search,
          location,
          minRating: rating,
        },
      });

      console.log(res.data);

      setColleges(res.data.data || []);
    } catch (err) {
      console.error(err);
      setColleges([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">

      <Hero />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-3">
          <FilterSidebar
            location={location}
            setLocation={setLocation}
            rating={rating}
            setRating={setRating}
          />
        </div>

        <div className="lg:col-span-9">

          {loading ? (

            <Loader />

          ) : colleges.length === 0 ? (

            <h2 className="text-2xl font-bold text-red-600">
              No Colleges Found
            </h2>

          ) : (

            <>
              {colleges.length === 0 ? (

  <EmptyState title="No Colleges Found" />

) : (

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    {colleges.map((college) => (

      <CollegeCard
        key={college.id}
        college={college}
      />

    ))}

  </div>

)}

              <Pagination
                page={page}
                setPage={setPage}
              />

            </>

          )}

        </div>

      </div>

    </main>
  );
}