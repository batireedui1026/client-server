const UserRow = (users) => {
  return (
    <div>
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
              <div className="font-bold">{users.firstname}</div>
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
          <button
            className="btn btn-ghost btn-xs border border-gray-400"
            // onClick={deleteEmployee}
          >
            delete
          </button>
          <button className="btn btn-ghost btn-xs border border-gray-400">
            edit
          </button>
        </th>
      </tr>
    </div>
  );
};
export default UserRow;
