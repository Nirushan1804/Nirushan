import "./newInventory.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewDelivery() {
  const [productName, setProductName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Brand, setBrand] = useState("");
  const [Image, setImage] = useState("");
  const [InventoryType, setInventoryType] = useState("");
  const [ProductFor, setProductFor] = useState("");
  const [isAvailable, setisAvailable] = useState("");

  const createEmployee = () => {
    if (
      productName === "" ||
      Description === "" ||
      Price === 0 ||
      Brand === "" ||
      Image === "" ||
      InventoryType === "" ||
      ProductFor === "" ||
      isAvailable === ""
    ) {
      toast.warn("Please fill all required fields...!");
    } else {
      const body = {
        ProductName: productName,
        Description: Description,
        price: Price,
        Brand: Brand,
        Image: Image,
        Category: ProductFor,
        SubCategory: InventoryType,
        isAvailable: isAvailable
      }

      console.log("data : ", body);
      axios
        .post("http://localhost:4000/api/v1/Products", body)
        .then((res) => {
          toast.success("New Promotion Successfully Created...!");
          setProductName("");
          setDescription("");
          setPrice(0);
          setBrand("");
          setImage("");
          setInventoryType("");
          setProductFor("");
          setisAvailable("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong, Please try again...!");
        });
    }
  };

  const [searchTerm, setSearchTerm] = useState();

  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  if(!category){
    axios
    .get("http://localhost:4000/api/v1/Category")
    .then((res) => {
      setCategory(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  if(!subCategory){
    axios
      .get("http://localhost:4000/api/v1/SubCategory")
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="newUser">
      <ToastContainer />
      <h1 className="newUserTitle">New Product</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Brand</label>
          <input
            type="text"
            placeholder="Brand"
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Category</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => (setProductFor(e.target.value),setSearchTerm(e.target.value))}
          >
            <option value="InventoryType">Select Category</option>
            {category?.map((item) => (
              <option value={item.Category}>{item.Category}</option>
            ))}
          </select>
        </div>
        <div className="newUserItem">
          <label>Sub Category</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setInventoryType(e.target.value)}
          >
            <option value="InventoryType">Select Sub Category</option>
            {subCategory?.filter((val) => {
              if (searchTerm === "") {
                return null;
              } else if (val.Category.includes(searchTerm)) {
                return val;
              }
            }).map((item) => (
              <option value={item.SubCategory}>{item.SubCategory}</option>
            ))}
          </select>
        </div>
        <div className="newUserItem">
          <label>isAvailable</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setisAvailable(e.target.value)}
          >
            <option value="isAvailable">Select Available Type</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Image URL</label>
          <input
            type="url"
            placeholder="Image URL"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <button className="newUserButton01" onClick={createEmployee}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
