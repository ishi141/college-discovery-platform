"use client";

interface Props {
  location: string;
  setLocation: (value: string) => void;

  rating: string;
  setRating: (value: string) => void;
}

export default function FilterSidebar({
  location,
  setLocation,
  rating,
  setRating,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      <div className="mb-6">

        <label className="font-semibold">
          Location
        </label>

        <select
          className="border rounded-lg w-full mt-2 p-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Hyderabad</option>
          <option>Tamil Nadu</option>
        </select>

      </div>

      <div>

        <label className="font-semibold">
          Minimum Rating
        </label>

        <select
          className="border rounded-lg w-full mt-2 p-3"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Any</option>
          <option>4</option>
          <option>4.5</option>
          <option>4.8</option>
        </select>

      </div>

    </div>
  );
}