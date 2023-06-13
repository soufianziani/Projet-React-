import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
import { XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const navigate = useNavigate();
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : "";
    setLocalUser(JSON.stringify(data ? data : null));
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLocalUser(null);
    navigate("/");
  };

  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigation = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/Products",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-white  md:text-sm border-b">
      <div className="container mx-auto px-4 md:flex justify-between items-center h-20">
        <NavLink to="/" className="text-decoration-none text-gray-700">
          <h2 className="font-bold ">B-pastry</h2>
        </NavLink>
        <div className="md:hidden">
          <button
            className="menu-btn text-gray-500 hover:text-gray-800"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className={`hidden md:flex items-center justify-between text-sm font-medium text-gray-700 pt-4`}>
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                activeClassName="text-blue-600 border-b-2 border-blue-600"
                className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-150 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              aria-haspopup="true"
            >
              Cart ({getdata.length})
            </button>
            <Menu
              anchorEl={anchorEl}
              open={open}
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <div className="text-lg font-medium text-gray-900">Shopping cart</div>
                            <div className="ml-3 flex h-7 items-center">
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  name="button-close"
                                  className=" -m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={handleClose}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {getdata.map((ele, k) => (
                                  <li key={k} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={ele.imgdata}
                                        alt={ele.rname}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a>{ele.rname}</a>
                                          </h3>
                                          <p className="ml-4">${ele.price * ele.qnty}</p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {ele.qnty}</p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() => dlt(ele.id)}
                                            className="text-red-500 hover:text-red-800"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${price}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"


                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Menu>
          </li>
          {localUser ? (
            <li>
              <NavLink
                to="/Aboute"
                activeClassName="text-blue-600 border-b-2 border-blue-600"
                className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
              >
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                activeClassName="text-blue-600 border-b-2 border-blue-600"
                className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
              >
                Login
              </NavLink>
            </li>
          )}
          {localUser && (
            <li>
              <button
                onClick={handleLogOut}
                className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
              >
                Logout <span aria-hidden="true">&rarr;</span>
              </button>
            </li>
          )}
        </ul>

        {showMenu && (
          <div className="md:hidden">
            <ul className={`flex flex-col items-center`}>
              {navigation.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                    className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={handleClick}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-150 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                  aria-haspopup="true"
                >
                  Cart ({getdata.length})
                </button>
              </li>
              {localUser ? (
                <li>
                  <NavLink
                    to="/profile"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                    className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Profile
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                    className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Login <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </li>
              )}
              {localUser && (
                <li>
                  <button
                    onClick={() => {
                      handleLogOut();
                      setShowMenu(false);
                    }}
                    className="text-gray-700 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out"

                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Header;

