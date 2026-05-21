export default function Landing() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sky-600">
          Kavish Desk
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Smart IT Support Ticket Management Platform
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-2xl">
            Employee Login
          </button>

          <button className="border border-sky-500 text-sky-600 px-6 py-3 rounded-2xl">
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}
