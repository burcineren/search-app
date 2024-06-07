import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setError } from "../features/ErrorSlice";

export default function Errors() {
  const errors = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  return (
    <div style={{ display: !errors.visibility ? "none" : "" }}>
      <div className="error-wrapper">
        <div className="cancel-button" onClick={() => dispatch(setError({ message: "", visibility: false }))}>
          <FaRegTimesCircle className="times" />
        </div>
        <div className="error-body">
          <div className="error-content">
            <p>
              <b>Error while adding link element</b>
            </p>
            <p>{errors.message}</p>
          </div>
          <div className="error">Error</div>
        </div>
      </div>
    </div>
  );
}
