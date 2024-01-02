import React from "react";
import Navbar2 from "../components/Navbar2";
import DetailsCard from "../components/DetailsCard";
import DebitCard from "../components/DebitCard";

const ViewDues = () => {
  const paymentDetails = [
    "Transaction ID :-",
    "Date :-",
    "Amount :-",
    "Name of the Student :-",
    "Roll Number of the Student :-",
    "Course :-",
    "Batch :-",
  ];

  const bankDetails = {
    Bank: "Union Bank of India",
    Name: "NIST Autonomous",
    IFSC: "UBIN0554501",
    "Account Number": "57500101005106",
  };

  const financialTransactions = [
    {
      date: "30/3/2021",
      debitAmount: "55250",
      creditAmount: "0",
      Narration: "Academic Fees for FY 2020-21(1st sem)",
    },
    {
      date: "30/3/2021",
      debitAmount: "55250",
      creditAmount: "0",
      Narration: "Academic Fees for FY 2020-21(1st sem)",
    },
    {
      date: "30/3/2021",
      debitAmount: "55250",
      creditAmount: "0",
      Narration: "Academic Fees for FY 2020-21(1st sem)",
    },
  ];

  const col = ["Date", "Debit Amount", "Credit Amount", "Narration"];

  return (
    <>
      <Navbar2 />
      <div className="p-3">
        <p className="text-orange-600 font-bold">
          All fees are to be paid by account transfer/deposit in the authorized
          account of the Institute (NIST Autonomous) only.
        </p>
        <p className="text-orange-600 font-bold">
          After the payment, please send an email with details of the payment in
          below format, to{" "}
          <span className="text-blue-700 font-bold">fees@nist.edu</span> with
          the Subject: "Payment of Academic Fees/Mess Dues" :-
        </p>
        <DetailsCard name="Payment Details Format" details={paymentDetails} />
        <DetailsCard
          name="Fees Deposit Account Details"
          details={bankDetails}
        />
        <p className="text-orange-600 font-bold text-xl py-2">
          No Mess Dues Found
        </p>
        <p className="text-orange-600 font-bold text-xl py-2">Academic Dues</p>
        <DebitCard col={col} details={financialTransactions} />
      </div>
    </>
  );
};

export default ViewDues;
