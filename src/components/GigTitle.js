import logo from "../assets/react.svg";
console.log(logo);
const GifTitle = ({ title = "" }) => {
  return (
    <h1 className="font-bold text-xl md:text-4xl flex items-center justify-center">
      {title}{" "}
      <img
        src={logo}
        className="w-16 animate-spin-slow md:w-24"
        alt="react"
      />
    </h1>
  );
};
export default GifTitle;
