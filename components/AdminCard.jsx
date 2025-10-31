export default function AdminCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  );
}
