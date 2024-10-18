import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransactionThunk } from "../../Store/reducers/transaction";
import { selectTransactionList } from "../../Store/selectors/transaction";

function TestTransaction() {
  const dispatch = useDispatch();
  const data = useSelector(selectTransactionList);
  const transObj = {
    amount: 390000.0,
    date: "2024-01-20",
    category: "Food",
    description: "boogy man",
    type: "expense",
  };
  useEffect(() => {
    // dispatch(fetchTransactions({ haveTransaction: data?.length === 0 }));
    // dispatch(createTransaction(transObj));
    // dispatch(updateTransactionThunk(transObj));
    // addTransaction(transObj);
  }, []);
  // console.log(data);
  function updateFun() {
    // dispatch(updateTransactionThunk(transObj));
    dispatch(deleteTransactionThunk({ id: 16, type: "expense" }));
  }
  return (
    <div>
      <div>
        {/* {data.map((item) => (
          <div key={item.id + item.type}>
            {item.description}
            {item.type}" "{item.id}
          </div>
        ))} */}
      </div>
      {/* <button onClick={() => updateFun()}>update transaction is checked</button> */}
    </div>
  );
}

export default TestTransaction;
