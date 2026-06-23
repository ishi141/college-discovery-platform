export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">

      <h2 className="text-4xl font-bold">

        {title}

      </h2>

      {subtitle && (

        <p className="text-gray-500 mt-2">

          {subtitle}

        </p>

      )}

    </div>
  );
}