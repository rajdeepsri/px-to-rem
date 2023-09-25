import { CgArrowsExchange } from "react-icons/cg";
const PixelToRem = ({
  pixel,
  handlePixelChange,
  swapConverter,
  rem,
  handleREMChange,
}) => {
  return (
    <div className="flex gap-10 items-center">
      <form className="flex flex-col">
        <label className="text-center m-1">Pixels</label>
        <input
          value={pixel}
          type="text"
          onChange={handlePixelChange}
          className="border border-neutral-700 focus:border-neutral-700 bg-transparent text-center
            min-h-[3.5rem] w-[20rem] text-5xl px-3 leading-3 hover:shadow-neutral-700 shadow-md transition duration-300"
        />
      </form>
      <CgArrowsExchange
        size="3rem"
        opacity="0.3"
        className="mt-6 cursor-pointer"
        onClick={swapConverter}
      />
      <form className="flex flex-col">
        <label className="text-center m-1">REM</label>
        <input
          value={rem}
          onChange={handleREMChange}
          type="text"
          className="border border-neutral-700 focus:border-neutral-700 bg-transparent text-center
            min-h-[3.5rem] w-[20rem] text-5xl text-sky-400 px-3 leading-3 hover:shadow-neutral-700 shadow-md transition duration-300"
        />
      </form>
    </div>
  );
};

export default PixelToRem;
