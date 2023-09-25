import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex justify-between px-10 items-center h-16 bg-neutral-800">
      <ul className="flex gap-5 text-base">
        <li className="font-extralight">
          Inspired by
          <a
            className="ml-2 font-semibold"
            href="https://nekocalc.com/px-to-rem-converter"
          >
            nekoCalc
          </a>
        </li>
      </ul>
      <ul className="flex gap-7">
        <h1 className="pr-5">Made by Rajdeep Shrivastava</h1>
        <a href="https://www.linkedin.com/in/rajdeep-shrivastava-199a9822a/">
          <TfiLinkedin size="1.5rem" />
        </a>
        <a href="https://github.com/rajdeepsri/">
          <AiFillGithub size="1.5rem" />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
