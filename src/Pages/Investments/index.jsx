import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllInvestmentPaginatedAndSortedThunk,
  getAllInvestmentsThunk,
  getPaginatedInvestmentThunk,
} from "../../Store/reducers/investment";
import {
  selectInvestmentList,
  selectInvestmentTotalNoOfElements,
} from "../../Store/selectors/investment";
import {
  selectSortingOrder,
  selectorderByField,
} from "../../Store/selectors/orderBy";
import { selectSummary } from "../../Store/selectors/transaction";
import useInfiniteScroll from "../../common/useInfiniteScroll";
import Table from "../../components/Table";
import { TABLE_HEADER_CONFIG_INCOME } from "../../components/Table/headerConfig";
import AddBtn from "../../components/core/AddBtn";
import Card from "../../components/core/Card";
import Navbar from "../../components/core/Navbar";
import { SORT_ORDER_BY_CONFIG } from "../Income";
import { getAllTransactionsThunk } from "../../Store/reducers/transaction";
import LoadingBar from "react-top-loading-bar";

function Investments() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const investmentlist = useSelector(selectInvestmentList);
  const [pageNum, setPageNum] = useState(1);
  const totalNoOfRecords = useSelector(selectInvestmentTotalNoOfElements);
  const sortField = useSelector(selectorderByField);
  const orderBy = useSelector(selectSortingOrder);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRef = useInfiniteScroll(() => {
    console.log("infinite scroll ran");
    setPageNum((prev) => prev + 1);
  });
  useEffect(() => {
    ref.current.continuousStart();
  }, []);

  useEffect(() => {
    setPageNum(1);
  }, [orderBy, sortField]);

  useEffect(() => {
    loadMoreData();
  }, [pageNum, sortField, orderBy]);

  // useEffect(() => {
  //   dispatch(getAllTransactionsThunk());
  // }, []);

  const loadMoreData = () => {
    dispatch(getPaginatedInvestmentThunk({ offset: pageNum, pageSize: 20 }));
    // if (pageNum * 20 <= totalNoOfRecords) {
    //   if (sortField == "default" || orderBy === 0) {
    //     console.log("default is called");
    //     dispatch(
    //       getPaginatedInvestmentThunk({ offset: pageNum, pageSize: 20 })
    //     );
    //   } else {
    //     dispatch(
    //       getAllInvestmentPaginatedAndSortedThunk({
    //         offset: pageNum,
    //         pageSize: 20,
    //         sortByField: sortField,
    //         orderBy: SORT_ORDER_BY_CONFIG[orderBy],
    //       })
    //     );
    //   }
    // }
    ref.current.complete();
  };
  const filteredData = investmentlist.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="nav-app">
      <LoadingBar ref={ref} color="#bb86fc" transitionTime={1000} />
      <Navbar label="Investments" />
      <div className="app-wrapper">
        <div className="summary">
          <p className="  font-semibold text-xl">Summary</p>
          <div className="dashboard-view py-3">
            <Card
              label="Total Investment"
              // icon={Piggy}
              stats={summary.totalInvestment}
            />
            {/* <Card label="No. of Investments" stats={Investment.length} /> */}
          </div>
        </div>
        <div className=" pt-7  w-min">
          <input
            className="search-bar"
            type="text"
            placeholder="Filter by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Table
          list={filteredData}
          headers={TABLE_HEADER_CONFIG_INCOME}
          handleRef={handleRef}
        />
        <AddBtn />
        {/* <div ref={handleRef}></div> */}
      </div>
    </div>
  );
}

export default Investments;
