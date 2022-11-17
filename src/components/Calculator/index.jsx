import { useDispatch, useSelector } from "react-redux";
import { resualtSlice } from "../redux/resualtSlice";
import "./style.css";

export const Calculator = () => {
  const dispatch = useDispatch();
  const showValue = useSelector((state) => state.total.value);
  const showTotal = useSelector((state) => state.total.resualt);
  const showHistory = useSelector((state) => state.total.history);

  const handleClick = (e) => {
    dispatch(resualtSlice.actions.showValue(e.target.value));
    if (e.target.value === "=") {
      dispatch(resualtSlice.actions.total(eval(showValue)));
    }

    if (e.target.value === "AC") {
      dispatch(resualtSlice.actions.resetCa());
    }
  };

  const clickHistory = () => {
    dispatch(resualtSlice.actions.history(showValue + showTotal));
  };

  return (
    <div className="a">
      <section className="calc-wrapper">
        <h2>lance's FreeCodeCamp Calculator</h2>
        <input type="text" id="show" value={showValue} />
        <input type="text" id="show" value={showTotal} />
        <section className="button-container" onClick={handleClick}>
          <button type="button" value="AC">
            AC
          </button>
          <button type="button" value="CE" disabled="disabled">
            CE
          </button>
          <button type="button" value="%">
            %
          </button>
          <button type="button" value="">
            /
          </button>

          <button type="button" value="7">
            7
          </button>
          <button type="button" value="8">
            8
          </button>
          <button type="button" value="9">
            9
          </button>
          <button type="button" value="*">
            *
          </button>

          <button type="button" value="4">
            4
          </button>
          <button type="button" value="5">
            5
          </button>
          <button type="button" value="6">
            6
          </button>
          <button type="button" value="-">
            -
          </button>

          <button type="button" value="1">
            1
          </button>
          <button type="button" value="2">
            2
          </button>
          <button type="button" value="3">
            3
          </button>
          <button type="button" value="+">
            +
          </button>

          <button type="button" value=".">
            .
          </button>
          <button type="button" value="0">
            0
          </button>
          <button type="button" value="Ans" disabled="disabled">
            Ans
          </button>
          <button type="button" value="=">
            =
          </button>
        </section>
      </section>
      <div>
        <h4>History</h4>
        <button onClick={clickHistory}>History</button>
        <div>{showHistory}</div>
      </div>
    </div>
  );
};
