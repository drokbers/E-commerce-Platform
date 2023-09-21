"use client";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

// Copy of TwoThumbs with `draggableTrack` prop added
const CustomRange: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([25, 75]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        draggableTrack
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              className="w-full h-0.5 rounded-full"
              style={{
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#000000", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="flex h-4 w-4 rounded-full justify-center bg-black-900"
            style={{
              ...props.style,
            }}
          ></div>
        )}
      />
      <output style={{ marginTop: "5px" }} id="output">
        {"$" + values[0].toFixed(0)} - {"$" + values[1].toFixed(0)}
      </output>
    </div>
  );
};

export default CustomRange;
