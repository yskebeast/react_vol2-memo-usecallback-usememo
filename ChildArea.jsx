import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  background: "red"
};

export const ChildArea = memo((props) => {
  const { open, close } = props;
  console.log("childが再レンダリング");

  // const data = [...Array(2000).keys()]
  // data.forEach(() => console.log('...'))
  return (
    <>
      {open ? (
        <div style={style}>
          <p>child</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
