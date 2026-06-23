import { ReactNode } from "react";

export default function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6">
      {children}
    </div>
  );
}