import toast, { ToastOptions } from "react-hot-toast";



const settingDark = (bg: string): ToastOptions => {
    return {

        style: {
            width: '90%',
            minWidth: '300px',
            maxWidth: '460px',
            background: bg,
            fontSize: 'var(--font-size-normal)',
            paddingTop: '1rem',

            color: '#ffffff', border: '2px solid #379dad'
        },
        duration: 2400,
        iconTheme: {
            primary: 'transparent',
            secondary: 'var(--color-base)',
        },


    }
}

type AlertType = "success" | "error" | "alert" | "info";

export const printAlert = (msg: string, type: AlertType = "success") => {
    switch (type) {
        case "success":
            toast.success("✅ Success : \n\n" + msg, settingDark(`var(--gradient-success)`));
            break;
        case "error":
            toast.error("🚨 Error : \n\n" + msg, settingDark(`var(--gradient-error)`));
            break;
        case "alert":
            toast.error(msg, settingDark(`linear-gradient(180deg, rgba(58, 58, 58, 0.23) 0%, rgba(0, 0, 0, 0.55)`));
            break;
        case "info":
            toast.success(msg, settingDark(`linear-gradient(180deg, rgba(100, 104, 208, 0.51) 0%, rgb(24, 36, 147)`));
            break;
        default:
            toast.success(msg, settingDark(`linear-gradient(180deg, rgba(100, 208, 192, 0.51) 0%, rgba(90, 186, 151, 0.51) 100%)`));
            break;
    }
}

export const featureNotAvailable = () => {
    printAlert("Sorry, this feature not available yet...", "alert");
}

export default printAlert;