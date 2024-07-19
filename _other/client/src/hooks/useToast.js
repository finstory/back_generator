import toast, { useToaster } from "react-hot-toast";

const useToast = () => {

    const settingDark = (bg = "#000000") => {
        return {

            style: {
                background: bg,
                color: '#ffffff', border: '2px solid #379dad'
            },
            duration: 2400,
            iconTheme: {
                primary: '#ffffff ',
                secondary: '#000000',
            }

        }
    }

    const alertConfirm = async (msg = "") => {
        const result = window.confirm(msg);
        return result;
    };


    const printAlert = (msg, type = "success") => {
        switch (type) {
            case "success":
                toast.success(msg, settingDark(`linear-gradient(180deg, rgba(100, 208, 192, 0.51) 0%, rgba(90, 186, 151, 0.51) 100%)`));
                break;
            case "error":
                toast.error("Error : " + msg, settingDark(`linear-gradient(180deg, rgba(0, 76, 255, 0.58) 0%, rgba(0, 132, 255, 0.6) 100%)`));
                break;
            case "alert":
                toast.error(msg, settingDark(`linear-gradient(180deg, rgba(218, 191, 41, 0.59) 0%, rgba(207, 171, 27, 0.53) 100%)`));
                break;
            case "info":
                toast.info(msg, settingDark());
                break;
            default:
                toast.success(msg, settingDark(`linear-gradient(180deg, rgba(100, 208, 192, 0.51) 0%, rgba(90, 186, 151, 0.51) 100%)`));
                break;
        }
    }


    return { printAlert, alertConfirm };
}

export default useToast;