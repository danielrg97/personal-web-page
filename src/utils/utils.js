/**
 * Valida si ya esta autenticado
 * @param {history del react-router-dom, obtenido por props del componente} history 
 */
export const validateIfHasToken = history =>{
    if(localStorage.getItem("Authorization") && localStorage.getItem("UserInSession")){
        history.push("/index")
    }
}

export const toastProperties = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};