const list1 = Array.from({ length: 25 }, (_, index) => index + 1);
const list2 = Array.from({ length: 25 }, (_, index) => index + 26);

const Table = () => {
  return (
    <>
      <h1 className="text-center text-3xl mt-20 font-normal">
        Conversion Table
      </h1>
      <div className="flex justify-center gap-60 my-10">
        <table className="text-sm text-left text-gray-500">
          <thead className="text-sm font-medium text-gray-100 bg-neutral-800 ">
            <tr className="border-b border-neutral-500 text-center">
              <th scope="col" className="px-6 py-3">
                PX
              </th>
              <th scope="col" className="px-6 py-3">
                REM
              </th>
            </tr>
          </thead>
          <tbody>
            {list1.map((item) => {
              return (
                <tr key={item} className="border-b border-neutral-700">
                  <td className="px-6 py-3">{item} px</td>
                  <td className="px-6 py-3">{(item / 16).toFixed(2)} rem</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="text-sm text-left text-gray-500">
          <thead className="text-sm font-medium text-gray-100 bg-neutral-800 text-center ">
            <tr className="border-b border-neutral-500">
              <th scope="col" className="px-6 py-3">
                PX
              </th>
              <th scope="col" className="px-6 py-3">
                REM
              </th>
            </tr>
          </thead>
          <tbody>
            {list2.map((item) => {
              return (
                <tr key={item} className="border-b border-neutral-700">
                  <td className="px-6 py-3">{item} px</td>
                  <td className="px-6 py-3">{(item / 16).toFixed(2)} rem</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
