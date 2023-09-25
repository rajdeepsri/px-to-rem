import Lottie from "lottie-react";
import animationData from "../planet-cartoon.json";

const Info = () => {
  return (
    <>
      <h1 className="text-center text-3xl mt-40 mb-8 font-normal">
        Pixel to REM Converter : A Practical Tool for CSS Sizing
      </h1>
      <div className="flex items-center pb-20">
        <div className="flex flex-col w-[40%] mx-auto gap-8 font-extralight pl-5">
          <div className="flex flex-col gap-2">
            <p>
              This calculator converts pixels to the CSS unit REM. The
              conversion is based on the default font-size of 16 pixel, but can
              be changed.
            </p>
            <p>
              With the CSS rem unit you can define a size relative to the
              font-size of the HTML root tag.
            </p>
            <p>
              The conversion works of course in both directions, just change the
              opposite input field.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-light">An Example</h2>
            <p>
              So if we take the default size as an example, than 1px represents
              0.0625rem and, in the other direction, 1rem represents 16px.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-light">EM vs. REM: The differences</h2>
            <p>
              Inside a sinlge document, the length of a REM unit is everywhere
              the same, it can just differ between documents. EM on the other
              side can differ between every element, because it is relative to
              the elements own font-size (excpetion is the font-size itself, in
              it EM is relative to the parent).
            </p>
            <p>REM is the newer unit, older browsers don't support it.</p>
          </div>
        </div>
        <div>
          <Lottie animationData={animationData} />
        </div>
      </div>
    </>
  );
};

export default Info;
