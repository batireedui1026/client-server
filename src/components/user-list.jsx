import { useEffect, useState } from "react";

const Userlist = () => {
  const [user, setUsers] = useState();
  const getEmployeeData = async () => {
    const res = await fetch("");
    const { users } = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getEmployeeData();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Нэр</th>
              <th>Албан тушаал</th>
              <th>Имэйл</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>mail</td>
              <th>
                <button className="btn btn-ghost btn-xs border border-gray-400">
                  delete
                </button>
                <button className="btn btn-ghost btn-xs border border-gray-400">
                  edit
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            {/* <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default Userlist;
