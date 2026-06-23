import { GraduationCap, Building2, Users } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      title: "500+",
      subtitle: "Colleges",
      icon: Building2,
    },
    {
      title: "50K+",
      subtitle: "Students",
      icon: Users,
    },
    {
      title: "1000+",
      subtitle: "Courses",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <Icon className="w-10 h-10 mb-4" />

            <h2 className="text-3xl font-bold">
              {item.title}
            </h2>

            <p className="text-blue-100">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}