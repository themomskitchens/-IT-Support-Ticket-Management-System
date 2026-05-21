export default function AdminDashboard() {
  return (
    <div className="p-10 bg-sky-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3>Total Tickets</h3>
          <p className="text-4xl font-bold mt-3">152</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3>Pending</h3>
          <p className="text-4xl font-bold mt-3">18</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3>Resolved</h3>
          <p className="text-4xl font-bold mt-3">124</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3>Engineers</h3>
          <p className="text-4xl font-bold mt-3">8</p>
        </div>
      </div>
    </div>
  );
}
