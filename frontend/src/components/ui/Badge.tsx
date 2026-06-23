export default function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
      {text}
    </span>
  );
}