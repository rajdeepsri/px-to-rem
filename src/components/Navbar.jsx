import { CgArrowsExchange } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-14 items-center">
      <a
        className="ml-8 flex items-center text-xl gap-1 cursor-pointer"
        href="#"
      >
        <h1>PX</h1>
        <CgArrowsExchange size="28px" />
        <h1>REM</h1>
      </a>
      <ul className="text-base flex gap-8 mr-8 ">
        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          PX to REM
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          PX to EM
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          PX to Percentage
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
