"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { College } from "@/types/college";

export default function ComparePage() {

  const [colleges,setColleges]=useState<College[]>([]);

  const [selected,setSelected]=useState<string[]>([]);

  const [result,setResult]=useState<College[]>([]);

  useEffect(()=>{

    getColleges();

  },[]);

  async function getColleges(){

    const res=await api.get("/colleges");

    setColleges(res.data.data);

  }

  async function compare(){

    if(selected.length<2){

      alert("Select at least 2 colleges");

      return;

    }

    const res=await api.post("/compare",{

      ids:selected

    });

    setResult(res.data);

  }

  return(

    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-8">

        Compare Colleges

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {

          colleges.map(college=>(

            <label
            key={college.id}
            className="border rounded-xl p-4 bg-white">

              <input

              type="checkbox"

              value={college.id}

              onChange={(e)=>{

                if(e.target.checked){

                  setSelected([...selected,college.id]);

                }

                else{

                  setSelected(

                    selected.filter(

                      id=>id!==college.id

                    )

                  );

                }

              }}

              />

              <span className="ml-3 font-semibold">

                {college.name}

              </span>

            </label>

          ))

        }

      </div>

      <button

      onClick={compare}

      className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl">

        Compare

      </button>

      {

        result.length>0 &&

        <div className="overflow-x-auto mt-10">

          <table className="w-full border">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-3">

                  Feature

                </th>

                {

                  result.map(college=>(

                    <th
                    key={college.id}
                    className="p-3">

                      {college.name}

                    </th>

                  ))

                }

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">

                  Location

                </td>

                {

                  result.map(c=>(

                    <td
                    key={c.id}
                    className="border p-3">

                      {c.location}

                    </td>

                  ))

                }

              </tr>

              <tr>

                <td className="border p-3">

                  Fees

                </td>

                {

                  result.map(c=>(

                    <td
                    key={c.id}
                    className="border p-3">

                      ₹ {c.fees.toLocaleString()}

                    </td>

                  ))

                }

              </tr>

              <tr>

                <td className="border p-3">

                  Rating

                </td>

                {

                  result.map(c=>(

                    <td
                    key={c.id}
                    className="border p-3">

                      ⭐ {c.rating}

                    </td>

                  ))

                }

              </tr>

              <tr>

                <td className="border p-3">

                  Avg Package

                </td>

                {

                  result.map(c=>(

                    <td
                    key={c.id}
                    className="border p-3">

                      ₹ {c.averagePackage.toLocaleString()}

                    </td>

                  ))

                }

              </tr>

            </tbody>

          </table>

        </div>

      }

    </main>

  );

}