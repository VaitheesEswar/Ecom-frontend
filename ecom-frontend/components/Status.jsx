import { IconContext } from "react-icons";

function Status({ status, color, icon: Icon }) {
  return (
    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium flex justify-center items-center ${color}`}>
      {Icon && (
        <IconContext.Provider value={{ size: "16" }}>
          <Icon />
        </IconContext.Provider>
      )}
      {status}
    </span>
  );
}

export default Status;