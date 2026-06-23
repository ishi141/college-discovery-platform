"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import { College } from "@/types/college";

import CollegeCard from "@/components/CollegeCard";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SavedPage() {

  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    getSaved();
  }, []);

  async function getSaved() {

    try {

      const res = await api.get("/saved");

      setSaved(res.data);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <ProtectedRoute>

      <main className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-10">

          Saved Colleges

        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {

            saved.map((item) => (

              <CollegeCard
                key={item.id}
                college={item.college}
              />

            ))

          }

        </div>

      </main>

    </ProtectedRoute>

  );

}