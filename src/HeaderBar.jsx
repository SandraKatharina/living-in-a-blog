import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import MenuList from "./MenuList";
import { Link } from "wouter";

function HeaderBar({ mapRef }) {
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
            <button className="h-12 w-12 text-midnight">
              <img
                src={"/sLogo-indigo-700.svg"}
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/sLogo-fuchsia-500.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "/sLogo-indigo-700.svg")
                }
                onClick={(e) => {
                  mapRef.current.easeTo({
                    center: [9.993682, 9.993682],
                    zoom: 0,
                  });
                }}
              />
            </button>
          </Link>
          <span className="inline-flex h-12 w-[85px] items-center justify-center text-center text-base uppercase text-midnight sm:w-48 sm:text-xl md:text-xl lg:text-2xl ">
            living in a blog
          </span>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="h-12 w-12 text-white hover:text-landscape"
          >
            {!showMenu ? (
              <FiMenu className="h-12 w-12" />
            ) : (
              <FiX className="h-12 w-12" />
            )}
          </button>{" "}
        </div>

        <div className="fixed right-0 w-1/2 md:w-1/4">
          <ul>
            {showMenu && <MenuList menuList={menuList} mapRef={mapRef} />}
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderBar;
