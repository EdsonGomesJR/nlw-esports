export function NavBar() {
  return (
    <div className="nav-container mt-4">
      <div className="navbar mt-4 ">
        <li className="list-item group">
          <i className="fa-solid fa-house"> </i>
          <span
            className="absolute text-[13px] font-medium translate-x-0 translate-y-[50px] transition-transform  duration-500 
            opacity-0 group-hover:translate-y-[20px] group-hover:opacity-100"
          >
            {' '}
            Home{' '}
          </span>
        </li>
        <li className="list-item">
          <i className="fa-solid fa-user"> </i>
          <span className="list-item-name2"> Profile </span>
        </li>
        <li className="list-item">
          <i className="fa-solid fa-gear"> </i>
          <span className="list-item-name"> Settings </span>
        </li>
        <li className="list-item">
          <i className="fa-solid fa-bag-shopping"> </i>
          <span className="list-item-name"> Bag </span>
        </li>
      </div>
    </div>
  );
}
