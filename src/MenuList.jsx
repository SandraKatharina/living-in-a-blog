import { Link } from "wouter";

function MenuList({ menuList }) {
  return (
    <div className="absolut top-10 -mt-5 flex w-screen flex-row flex-wrap justify-between bg-water px-4 text-sm text-white">
      {menuList.map((item) => (
        <Link key={item.id} href={item.target}>
          <h2 className="cursor-pointer hover:text-midnight">{item.caption}</h2>
        </Link>
      ))}
    </div>
  );
}

export default MenuList;
