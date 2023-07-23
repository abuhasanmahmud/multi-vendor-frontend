import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import Cart from "../Cart/Cart";

const Header = ({ activeHeading }) => {
  //   const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { isSeller } = useSelector((state) => state.seller);
  const isSeller = true;
  //   const { wishlist } = useSelector((state) => state.wishlist);
  //   const { cart } = useSelector((state) => state.cart);
  //   const { allProducts } = useSelector((state) => state.products);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    //     setSearchTerm(term);

    //     const filteredProducts =
    //       allProducts &&
    //       allProducts.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()));
    //     setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary " sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex mt-2">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
