import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useRequestServices } from "../../../services/useRequestServices";
import useRouteServices from "../../../services/useRouteServices";

export const ModelToEdit = ({
  scss,
  editorModal,
  setEditorModal,
  item,
  routeModule,
  menuSelected,
}) => {
  const { editControllerTypes } = useRequestServices();
  const { getAllRoutes } = useRouteServices();
  const { open, key, value } = editorModal;
  const textareaRef = useRef(null);
  const containerRef = useRef(null);
  const { values, handleInputChange, reset } = useForm({
    request_value: value ? value : "",
  });

  const onPressEdit = async (value) => {
    await editControllerTypes(routeModule, menuSelected, item, {
      key,
      value,
    });
    await getAllRoutes();
    setEditorModal({ ...editorModal, open: false });
  };

  useEffect(() => {
    if (open) {
      textareaRef.current.focus();
      textareaRef.current.value = value;
    }
  }, [open]);

  const handleEscapePress = (event) => {
    if (event.key === "Escape") {
      setEditorModal({ open: false });
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      onPressEdit(values.request_value);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("keydown", handleEscapePress);
      containerRef.current.addEventListener("keypress", handleEnterPress);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("keydown", handleEscapePress);
        containerRef.current.removeEventListener("keypress", handleEnterPress);
      }
    };
  }, [containerRef.current]);

  if (open && value)
    return (
      <div className={scss.modal_to_edit} ref={containerRef}>
        <div className={scss.title}>{key}</div>
        <div className={scss.textarea_wrap}>
          <textarea
            ref={textareaRef}
            type="text"
            name="request_value"
            placeholder={value}
            onChange={handleInputChange}
            value={values.request_value}
          />
        </div>
        <div className={scss.btn_group}>
          <button
            className={scss.cancel}
            onClick={() => {
              setEditorModal({
                open: false,
                key: "",
                value: "",
                menuSelected: "",
              });
            }}
          >
            CANCEL
          </button>
          <button
            onClick={() => {
              onPressEdit(values.request_value);
            }}
            className={scss.edit}
          >
            EDIT
          </button>
        </div>
      </div>
    );
};
