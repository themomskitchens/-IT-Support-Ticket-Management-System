export default function RaiseTicket() {
  return (
    <div className="p-10">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">
          Raise Ticket
        </h2>

        <input
          type="text"
          placeholder="Issue Title"
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <select className="w-full border p-4 rounded-2xl mb-4">
          <option>Hardware</option>
          <option>Software</option>
          <option>Network</option>
        </select>

        <textarea
          placeholder="Describe Issue"
          className="w-full border p-4 rounded-2xl mb-4"
          rows="5"
        ></textarea>

        <button className="bg-sky-500 text-white px-8 py-4 rounded-2xl">
          Submit Ticket
        </button>
      </div>
    </div>
  );
}
