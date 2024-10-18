import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import Card from "../../components/core/Card";
import { useState } from "react";
import AddBtn from "../../components/core/AddBtn";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import InputText from "../../components/core/InputText";

function Subscriptions() {
  // const [isOpen, setIsOpen] = useState(false);
  const totalSubs = 0;
  const Subscription = 0;
  const [editData, setEditData] = useState(null);

  const [filterValue, setFilterValue] = useState("");

  const list = [];

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <div className="nav-app">
      <Navbar label="Subscription" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="dashboard-view px-5 py-3">
          <Card
            label="Total Subscription"
            icon={Play}
            stats={totalSubs}
            currency="$"
          />
          <Card label="Total Subscription" stats={Subscription.length} />
        </div>
      </div>
      <div className="w-52 px-5">
        <InputText
          placeholder="Filter by name"
          value={filterValue}
          handleChange={(val) => {
            setFilterValue(val);
          }}
        />
      </div>
      <Table
        handleModal={(val) => {
          setIsOpen(true);
          setEditData(val);
        }}
        list={filterValue ? filteredList : list}
      />
      <button
        onClick={() => {
          setEditData(null);
          setIsOpen(true);
        }}
      >
        <AddBtn />
      </button>
      {/* {isOpen && (
        <div className="blur-overlay" onClick={() => closeModal()}></div>
      )}
      {isOpen && <Modal closeModal={() => closeModal()} editdata={editData} />} */}
    </div>
  );
}

export default Subscriptions;
