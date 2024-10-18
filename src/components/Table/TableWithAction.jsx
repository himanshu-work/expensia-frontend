import React from "react";
import Text from "../core/Text";
import DateComponent from "../Common/Date";
import Amount from "../Common/Amount";
import Badge from "../Common/Badge";
import Category from "../Common/Category";
import RecordAction from "../Common/RecordAction";

function TableWithAction({
  list,
  colWidths,
  headers,
  components,
  handleDelete,
  handleEditAction,
  handleDeleteAction,
}) {
  return (
    <div className=" table_component">
      <table className="w-full">
        <thead style={{ height: "60px" }} className="table_header">
          <tr className="py-5">
            {headers?.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => (
            <tr key={index} className="py-5" style={{ height: "40px" }}>
              <td className="">
                <Text data={item} />
              </td>
              <td className="">
                <DateComponent data={item} />
              </td>
              <td className="">
                <Amount data={item} />
              </td>
              <td className="text-center ">
                <Category data={item} />
              </td>
              <td className="text-center flex justify-center ">
                <RecordAction
                  handleEditAction={handleEditAction}
                  handleDeleteAction={handleDeleteAction}
                  recordObject={item}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableWithAction;
