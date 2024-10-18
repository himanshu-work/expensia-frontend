import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
// import { actions } from "../../Store";

function BackupTable({ handleModal, list }) {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.slice(1);

  const dispatch = useDispatch();

  return (
    <div className="px-5 py-3">
      <table className="table w-full table-fixed rounded-md">
        <thead className="cursor-pointer t-head">
          <tr className="tr border-1">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        {list?.length > 0 ? (
          <tbody>
            {list?.map((item) => (
              <tr key={item.id} className="tr">
                <td className="p-2 text-left">{item.name}</td>
                <td className="p-2 text-left">${parseInt(item.amount)}</td>
                <td className="p-2 text-left">{item.date}</td>
                <td className="p-2 text-left">{item.category}</td>
                <td className="p-2 text-left flex gap-3 action">
                  <button onClick={() => handleModal(item)}>
                    <Edit />
                  </button>
                  <button
                  // onClick={() =>
                  //   dispatch(actions.deleteData({ type: path, data: item }))
                  // }
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className="tr">
            <tr>
              <td className="p-4 text-center " colSpan="5">
                No data
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default BackupTable;
