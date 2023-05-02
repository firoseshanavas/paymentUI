import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./PaymentScreen.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
const columns = [
  { field: "id", headerName: "Reciept", width: 70 },
  { field: "status", headerName: "Status", width: 130 },
  {
    field: "datePaid",
    headerName: "Date paid",
    // width: 130,
    sortable: true,
    valueGetter: (params) =>
      `${params.row.datePaid || ""} ${params.row.datePaid || ""}`,
  },
  {
    field: "graveSite",
    headerName: "Grave Site",
    // width: 90,
  },
  {
    field: "paidBy",
    headerName: "Paid By",

    // width: 160,
  },
  {
    field: "NoOfPayment",
    headerName: "No of Payment",
    // width: 160,
  },
  {
    field: "total",
    headerName: "Total",
    // width: 160,
  },
];

const rows = [
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
  {
    id: 1234,
    status: "Unposted",
    datePaid: "01/11/2021",
    graveSite: "01-1001-03.0",
    paidBy: "Thomas",
    NoOfPayment: 2,
    total: "$50",
  },
];

export default function PaymentScreen() {
  return (
    <>
      <div className={styles.headingWrap}>
        <h1>Payments</h1>
        <div className={styles.searchBoxWrap}>
          <div className="position-relative">
            <input
              type="text"
              id="search"
              placeholder="Search by reciept,grave,site,payor"
              name="search"
              className={styles.searchBar}
            />
          </div>
          <button className="btn-primary mr-1">
            <FeatherIcon icon="filter" size={15} /> Filter
          </button>
          <button className="btn-primary">+ Payment</button>
        </div>
      </div>
      {/* Table spanning not possible due to community version. Need to create it from scratch */}
      <div style={{ height: 400, width: "90%" }} className={styles.tableWrap}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
          checkboxSelection
        />
      </div>
    </>
  );
}
