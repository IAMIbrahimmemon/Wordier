import classnames from "classnames";

type TBoardPieceProps = {
  letter: string;
  color: string;
  className?: string;
};

function BoardPiece(props: TBoardPieceProps) {
  return (
    <div className="m-3 inline-block top-0 left-0">
      <div
        className={classnames(
          "rounded-xl bg-gray-300 h-14 w-14 text-center leading-relaxed text-3xl top-0 left-0",
          props.color === "r" && "text-red-500",
          props.color === "y" && "text-yellow-400",
          props.color === "g" && "text-[#04AA6D]",
          props.color === "bl" && "text-gray-300",
          props.letter === "gsdgfs" && " dsfgs"
        )}
      >
        {props.letter}
      </div>
    </div>
  );
}

export default BoardPiece;
