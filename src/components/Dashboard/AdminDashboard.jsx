import Headaer from "../../Other/Headaer";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Headaer />

      <form className="flex justify-between items-start">

        <div className="w-1/2">

          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="enter task" />
          </div>

          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>

          <div>
            <h3>Assign</h3>
            <input type="text" placeholder="Enter your employee name" />
          </div>

          <div>
            <h3>Category</h3>
            <input type="text" placeholder="design dev etc" />
          </div>

        </div>

        <div className="w-1/2">
          <h3>Description</h3>
          <textarea
            className="bg-amber-100 w-full"
            placeholder="text area"
            rows={10}
          ></textarea>
        </div>

      </form>

      <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
        Create Task
      </button>
    </div>
  );
};

export default AdminDashboard;