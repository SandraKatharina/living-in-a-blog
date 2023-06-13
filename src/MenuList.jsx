function MenuList({ menuList }) {
  return (
    <div className="absolut top-10 grid w-screen grid-flow-row grid-cols-3 gap-2 bg-water px-8 text-midnight">
      {menuList.map((item) => (
        <div className="cursor-pointer hover:text-landscape" key={item.id}>
          <h2>{item.caption}</h2>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
