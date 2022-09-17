/* eslint-disable prettier/prettier */
import {
  ElMessage as euiMessage
} from "element-plus";

const toastInit = (mes, type) => {
  return euiMessage({
    showClose: true,
    message: mes,
    type: type
  });
}

const helper = {
  toast: {
    success: (mes) => {
      return toastInit(mes, "success");
    },
    warning: (mes) => {
      return toastInit(mes, "warning");
    },
    info: (mes) => {
      return toastInit(mes, "info");
    },
    error: (mes) => {
      return toastInit(mes, "error");
    },
  }
};

export default helper;