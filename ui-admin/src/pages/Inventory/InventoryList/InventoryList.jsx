import "./InventoryList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../components/spinner/Spinner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DeliveryList() {
  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/Products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [data]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/Products/${id}`)
      .then((response) => {
        getRequest();
        toast.success("Delivery has been Successfully Deleted...!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      });
  };

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="userList">
      <ToastContainer />
      <div className="userTitleContainer" style={{ marginRight :"30px", marginLeft: "30px"}}>
        <h1 className="userTitle">{" "}</h1>
        <Link to="/newInventory">
          <button className="userAddButton">New Product</button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">ProductName</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">SubCategory</StyledTableCell>
              <StyledTableCell align="right">isAvailable</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.filter(val => {
                if (searchTerm === "") {
                  return val
                } else if (
                  val.ProductFor.includes(
                    searchTerm
                  )
                ) {
                  return val
                }
              }).map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="right">
                    <img src={row.Image} alt="ProductImg" width={"40px"} style={{borderRadius:10}}></img>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ProductName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Brand}</StyledTableCell>
                  <StyledTableCell align="right">{row.Category}</StyledTableCell>
                  <StyledTableCell align="right">{row.SubCategory}</StyledTableCell>
                  <StyledTableCell align="right">{row.isAvailable.toString()}</StyledTableCell>
                  <StyledTableCell align="left">
                    <DeleteOutline
                      className="productListDelete"
                      onClick={() => handleDelete(row.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <Spinner />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
