import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination";
import { getDataAction } from "../Store/AuthAction";
import { useDispatch } from "react-redux";

function Tables() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToPage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  //   const handlePageChange = (page) => {
  //     setCurrentPage(page);
  //   };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then((response) => {
        setDatas(response.data);
        console.log("setDatas", setDatas);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function handlePageChange(page) {
    console.log("next function", page);
    setCurrentPage(page);

    await axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((response) => {
        setDatas(response.data);
        console.log("setDatas", setDatas);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleDateChange(page) {
    console.log("next function", page);
    setCurrentPage(page);

    await axios
      .get(`https://api.punkapi.com/v2/beers?page=1&brewed_before=&per_page=10`)
      .then((response) => {
        setDatas(response.data);
        console.log("setDatas", setDatas);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function handleFromDate(date) {
    console.log("date", date);

    let newdate = date;
    newdate = date.split("-").reverse().join("-");
    let dateInfo = newdate.split("-");
    console.log("month", dateInfo[1]);
    console.log("year", dateInfo[2]);
    let dateFinal = dateInfo[1] + "/" + dateInfo[2];
    console.log("dateFinal", dateFinal);
    setFromDate(dateFinal);

    let apiurl = `https://api.punkapi.com/v2/beers?`;

    if (dateFinal) {
      apiurl = apiurl + `&brewed_after=${dateFinal}`;
    }

    if (toDate) {
      apiurl = apiurl + `&brewed_before=${toDate}`;
    }

    apiurl = apiurl + `&page=1&per_page=10`;

    await axios
      .get(apiurl)
      .then((response) => {
        setDatas(response.data);
        console.log("setDatas", setDatas);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function handleToDate(date) {
    //   setCurrentPage(page);
    console.log("date to", date);

    let newdate = date;
    newdate = date.split("-").reverse().join("-");
    let dateInfo = newdate.split("-");
    console.log("month", dateInfo[1]);
    console.log("year", dateInfo[2]);
    let dateFinal = dateInfo[1] + "/" + dateInfo[2];
    console.log("dateFinal", dateFinal);
    setToPage(dateFinal);

    let apiurl = `https://api.punkapi.com/v2/beers?`;

    if (dateFinal) {
      apiurl = apiurl + `&brewed_before=${dateFinal}`;
    }

    if (fromDate) {
      apiurl = apiurl + `&brewed_after=${fromDate}`;
    }

    apiurl = apiurl + `&page=1&per_page=10`;

    await axios
      .get(apiurl)
      .then((response) => {
        setDatas(response.data);
        console.log("setDatas", setDatas);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <label>
        {" "}
        From
        <input
          type="date"
          onChange={(event) => handleFromDate(event.target.value)}
        />{" "}
      </label>{" "}
      {""}
      <label>
        {" "}
        To
        <input
          type="date"
          onChange={(event) => handleToDate(event.target.value)}
        />
      </label>
      <br />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>First Brewed</th>
            <th>PH</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((myList) => (
            <tr>
              <td>{myList.id}</td>
              <td>{myList.name}</td>
              <td>{myList.first_brewed}</td>
              <td>{myList.ph}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ResponsivePagination
        current={currentPage}
        total={33}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
}

export default Tables;
