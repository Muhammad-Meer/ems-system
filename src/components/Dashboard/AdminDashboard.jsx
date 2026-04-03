import Headaer from "../../Other/Headaer";
import Createtask from "../../Other/Createtask";
import ALLtask from "../../Other/ALLtask";

const AdminDashboard = () => {
  return (
           <>
           <div className="bg-gray-800">
           <Headaer/>
           <Createtask/>
           <ALLtask/>
           </div>

           </>
  );
};

export default AdminDashboard;