import classnames from "classnames";

type TNavBarProps = {
  active: string;
  className?: string;
};

function NavBar(props: TNavBarProps) {
  return (
    <div className={props.className}>
      <ul className="list-none overflow-hidden bg-[#333] text-white">
        {/* <!-- <li><a href="home.html">🏠 Home</a></li> --> */}
        <li className="float-left inline">
          <a
            className={classnames(
              "block p-2 text-center py-[14px] px-4",
              props.active === "Normal" && "bg-[#04AA6D]",
              props.active !== "Normal" && "hover:bg-[#111]"
            )}
            href="/"
          >
            Normal
          </a>
        </li>
        <li className="float-left inline">
          <a
            className={classnames(
              "block p-2 text-center py-[14px] px-4",
              props.active === "Easy" && "bg-[#04AA6D]",
              props.active !== "Easy" && "hover:bg-[#111]"
            )}
            href="/easy"
          >
            Easy
          </a>
        </li>
        <li className="float-left inline">
          <a
            className={classnames(
              "block p-2 text-center py-[14px] px-4",
              props.active === "Hard" && "bg-[#04AA6D]",
              props.active !== "Hard" && "hover:bg-[#111]"
            )}
            href="/hard"
          >
            Hard
          </a>
        </li>
        <li className="float-right inline">
          <a
            className={classnames(
              "block p-2 text-center py-[14px] px-4",
              props.active === "About" && "bg-[#04AA6D]",
              props.active !== "About" && "hover:bg-[#111]"
            )}
            href="/about"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
