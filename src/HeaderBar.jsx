import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import MenuList from "./MenuList";
import { Link } from "wouter";
import LoginForm from "./LoginForm";

function HeaderBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch("/menuList.json")
      .then((data) => data.json())
      .then((menuList) => setMenuList(menuList));
  }, []);

  return (
    <>
      <header className="fixed z-20 bg-water">
        <div className="h-18 inline-flex w-screen items-center justify-around py-2">
          <Link href="/">
            <button className="h-16 w-16 text-midnight hover:text-landscape">
              <img src={"/sLogo-indigo-700.svg"} />
            </button>
          </Link>
          <span className="text-md inline-flex h-16 w-16 items-center justify-center text-center uppercase text-midnight md:w-48 md:text-xl ">
            living in a blog
          </span>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="h-16 w-16 text-white hover:text-landscape"
          >
            {!showMenu ? (
              <FiMenu className="h-16 w-16" />
            ) : (
              <FiX className="h-16 w-16" />
            )}
          </button>
        </div>
        <div className="fixed right-0 w-1/2">
          <ul>{showMenu && <MenuList menuList={menuList} />}</ul>
        </div>
        <div className="hidden sm:hidden lg:visible">
          <LoginForm />
        </div>
      </header>
    </>
  );
}

export default HeaderBar;
