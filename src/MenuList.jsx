import { Link } from "wouter";
import LoginForm from "./LoginForm";

function MenuList({ menuList }) {
  return (
    <div className="flex h-screen flex-col bg-water px-4 uppercase text-white">
      <div>
        {menuList.map((item) => (
          <Link key={item.id} href={item.target}>
            <li className="my-1 cursor-pointer list-none hover:text-midnight">
              {item.caption}
            </li>
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <LoginForm />
      </div>
    </div>
  );
}

export default MenuList;
