import { useEffect, useState } from "react";
import UserRow from "./user-row";

const Userlist = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };
  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Нарантунгалаг",
        lastname: "Даваа",
        email: "naraa@gmail.com",
        position: "Хөгжүүлэгч",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    console.log("AE", user);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);
  // const deleteEmployee = async () => {
  //   const [userRow, setUserRow] = useState();
  //   const res = await fetch("http://localhost:8000/users");
  //   const data = await res.json();
  //   setUserRow(null);
  // };

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
            {users?.map((user) => (
              <UserRow user={user} />
            ))}
          </tbody>
        </table>
        <div>
          <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
            }}
          >
            Ажилтан нэмэх
          </button>

          <dialog id="my_modal_1" open={true} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Ажилчид</p>
              <div className="flex gap-4 flex-col">
                <input
                  type="text"
                  placeholder="Нэр"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Овог"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="и-мэйл"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="мэргэжил"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={createEmployee}>
                    Save
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
export default Userlist;
