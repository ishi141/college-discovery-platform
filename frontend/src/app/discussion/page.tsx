"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import toast from "react-hot-toast";

interface Question {
  id: string;
  title: string;
  description: string;
  answers: {
    id: string;
    answer: string;
  }[];
}

export default function DiscussionPage() {

  const [questions, setQuestions] = useState<Question[]>([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {

    try {

      const res = await api.get("/discussions/questions");

      setQuestions(res.data);

    } catch (error) {

      console.log(error);

    }

  }

  async function askQuestion() {

    try {

      const user = JSON.parse(
        localStorage.getItem("user") || "{}"
      );

      await api.post("/discussions/question", {

        title,
        description,
        userId: user.id,

      });

      toast.success("Question Posted");

      setTitle("");

      setDescription("");

      fetchQuestions();

    } catch (error) {

      toast.error("Unable to post question");

    }

  }

  return (

    <main className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">

        Discussion Forum

      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">

        <input
          className="border rounded-lg p-3 w-full mb-4"
          placeholder="Question Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          className="border rounded-lg p-3 w-full mb-4"
          rows={4}
          placeholder="Describe your question..."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button
          onClick={askQuestion}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl"
        >
          Ask Question
        </button>

      </div>

      {

        questions.map((question)=>(

          <div
            key={question.id}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >

            <h2 className="text-2xl font-bold">

              {question.title}

            </h2>

            <p className="mt-3 text-gray-600">

              {question.description}

            </p>

            <div className="mt-6">

              <h3 className="font-bold mb-3">

                Answers

              </h3>

              {

                question.answers.length===0 ?

                <p>No Answers Yet</p>

                :

                question.answers.map((answer)=>(

                  <div
                    key={answer.id}
                    className="border rounded-lg p-3 mb-3"
                  >

                    {answer.answer}

                  </div>

                ))

              }

            </div>

          </div>

        ))

      }

    </main>

  );

}