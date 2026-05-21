export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-2xl mb-6"
        />

        <button className="w-full bg-sky-500 text-white p-4 rounded-2xl">
          Login
        </button>
      </div>
    </div>
  );
}
