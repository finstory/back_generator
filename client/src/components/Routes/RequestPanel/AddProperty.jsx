import React from "react";

export const AddProperty = ({ scss }) => {
  return (
    <div key={"obj.id"} className={scss.prop}>
      <div className={scss.mark}></div>
      <div
        className={scss.column}
        // onClick={() => onPressValue(obj.key, obj.value, obj.optional, "key")}
      >
        <p>
          {/* {obj.key} */}
          facu
        </p>
      </div>
      <div
        className={scss.column}
        // onClick={() => onPressValue(obj.key, obj.value, obj.optional, "value")}
      >
        <p className={true ? "" : scss.is_null}>
          {/* {obj.value ? obj.value : "NULL"} */}
          asdasd
        </p>
      </div>
      <div className={`${scss.column} ${scss.column_type}`}>
        <p className={scss["string"]}>
          {/* {obj.type} */}
          string
        </p>
        <div className={`${scss.optional} ${!true ? scss.active : ""}`}>?</div>
      </div>
    </div>
  );
};
