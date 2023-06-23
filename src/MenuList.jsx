import { Link } from "wouter";
import LoginForm from "./LoginForm";

function MenuList({ menuList, mapRef }) {
  return (
    <div className="flex h-screen flex-col bg-water px-4 text-base uppercase text-white sm:text-xl lg:text-2xl">
      <div>
        {menuList.map((item) => (
          <Link
            key={item.id}
            href={item.target}
            onClick={(e) => {
              mapRef.current.easeTo({
                center: [9.993682, 9.993682],
                zoom: 0,
              });
            }}
          >
            <li className="my-4 cursor-pointer list-none hover:text-midnight">
              {item.caption}
            </li>
          </Link>
        ))}
      </div>
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
}

export default MenuList;
