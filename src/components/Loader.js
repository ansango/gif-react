export const TitleLoader = () => {
  return (
    <div className="border border-green-300 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="space-y-2">
            <div className="h-4 bg-green-400 rounded"></div>
            <div className="h-4 bg-green-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardLoader = () => (
  <li className="border border-green-300 shadow rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-green-400 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-green-400 rounded"></div>
          <div className="h-4 bg-green-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </li>
);

const Loader = ({ amount = 1, Component }) => {
  return (
    <>
      {Array(amount)
        .fill()
        .map((_, index) => {
          return <Component key={index} />;
        })}
    </>
  );
};
export default Loader;
