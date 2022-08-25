import NavBar from "../components/NavBar";
import BoardPiece from "../components/BoardPiece";
import classnames from "classnames";

function HomePage() {
  let letters = [
    "R",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ];
  let colors = [
    "r",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
    "bl",
  ];

  return (
    <div className="mx-auto my-5">
      <NavBar className="-my-5" active="Normal" />
      <div className="mt-10 place-content-center">
        <div className="flex justify-center">
          <BoardPiece color={colors[0]} letter={letters[0]} />
          <BoardPiece color={colors[1]} letter={letters[1]} />
          <BoardPiece color={colors[2]} letter={letters[2]} />
          <BoardPiece color={colors[3]} letter={letters[3]} />
          <BoardPiece color={colors[4]} letter={letters[4]} />
        </div>
        <div className="flex justify-center">
          <BoardPiece color={colors[5]} letter={letters[5]} />
          <BoardPiece color={colors[6]} letter={letters[6]} />
          <BoardPiece color={colors[7]} letter={letters[7]} />
          <BoardPiece color={colors[8]} letter={letters[8]} />
          <BoardPiece color={colors[9]} letter={letters[9]} />
        </div>
        <div className="flex justify-center">
          <BoardPiece color={colors[10]} letter={letters[10]} />
          <BoardPiece color={colors[11]} letter={letters[11]} />
          <BoardPiece color={colors[12]} letter={letters[12]} />
          <BoardPiece color={colors[13]} letter={letters[13]} />
          <BoardPiece color={colors[14]} letter={letters[14]} />
        </div>
        <div className="flex justify-center">
          <BoardPiece color={colors[15]} letter={letters[15]} />
          <BoardPiece color={colors[16]} letter={letters[16]} />
          <BoardPiece color={colors[17]} letter={letters[17]} />
          <BoardPiece color={colors[18]} letter={letters[18]} />
          <BoardPiece color={colors[19]} letter={letters[19]} />
        </div>
        <div className="flex justify-center">
          <BoardPiece color={colors[20]} letter={letters[20]} />
          <BoardPiece color={colors[21]} letter={letters[21]} />
          <BoardPiece color={colors[22]} letter={letters[22]} />
          <BoardPiece color={colors[23]} letter={letters[23]} />
          <BoardPiece color={colors[24]} letter={letters[24]} />
        </div>
        <div className="flex justify-center">
          <BoardPiece color={colors[25]} letter={letters[25]} />
          <BoardPiece color={colors[26]} letter={letters[26]} />
          <BoardPiece color={colors[27]} letter={letters[27]} />
          <BoardPiece color={colors[28]} letter={letters[28]} />
          <BoardPiece color={colors[29]} letter={letters[29]} />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
