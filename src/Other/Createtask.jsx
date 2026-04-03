
const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 p-8 text-white">

      <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-md">

        <form className="flex flex-wrap gap-6">

          {/* Left Side */}
          <div className="w-full md:w-[48%] space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Category
              </label>
              <input
                type="text"
                placeholder="Design / Dev"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

          </div>

          {/* Right Side */}
          <div className="w-full md:w-[48%]">

            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Write task details..."
              rows={10}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

          </div>

        </form>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Create Task
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;