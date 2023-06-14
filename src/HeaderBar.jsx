import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import MenuList from "./MenuList";

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
      <header className="">
        <div className="flex h-28 w-full flex-row items-center justify-around bg-transparent">
          <button className="h-20 w-20 text-midnight hover:text-landscape">
            <img src={"/sLogo-indigo-700.svg"} />
          </button>
          <span className="flex h-20 w-20 items-center justify-center text-center text-midnight ">
            LIVING IN A BLOG
          </span>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="relative h-20 w-20 text-white hover:text-landscape"
          >
            {!showMenu ? (
              <FiMenu className="h-20 w-20" />
            ) : (
              <FiX className="h-20 w-20" />
            )}
          </button>
        </div>
        <div>{showMenu && <MenuList menuList={menuList} />}</div>
      </header>
    </>
  );
}

export default HeaderBar;
