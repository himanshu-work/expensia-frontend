import React from "react";
import { TABLE_COMPONENT_CONFIG } from "./headerConfig";
import SmartTableHeader from "../Common/SmartTableHeader";

function Table({ list, headers, handleRef }) {
  return (
    <table className="w-full table_component mt-5">
      <thead className="table_header !h-10">
        <tr>
          {headers?.map((header) => (
            <th
              style={{ maxWidth: 200 }}
              className={` px-3 text-sm font-medium ${header?.classes}`}
              key={header.key}
            >
              {/* {header.label} */}
              <SmartTableHeader label={header.label} labelKey={header.key} />
              {/* {smart header} */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-[#1e1e1e]">
        {list?.map((item, index) => (
          <tr key={index} ref={index === list.length - 1 ? handleRef : null}>
            {/* {index}
              {"length is "}
              {index === list.length - 1 ? "last" : "not last"} */}
            {headers?.map((header, index) => {
              const Component = TABLE_COMPONENT_CONFIG?.[header?.key];
              return (
                <td key={index} className={` px-3 py-5 ${header?.classes}`}>
                  {Component ? <Component data={item} /> : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
