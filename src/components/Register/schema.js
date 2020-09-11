import * as Yup from 'yup';

export default Yup.object().shape({
    names: Yup.string()
        .required("El nombre es requerido")
        .min(2, "El nombre requiere mas de 2 caracteres")
        .max(100, "El campo tiene un máximo de 100 caracteres"),
    lastNames: Yup.string()
        .required("El apellido es requerido")
        .min(2, "El apellido requiere mas de 2 caracteres")
        .max(100, "El campo tiene un máximo de 100 caracteres"),
    email: Yup.string()
        .email('El e-mail debe ser válido')
        .required("El e-mail es requerido")
        .min(10, "El e-mail requiere mas de 10 caracteres")
        .max(250, "El campo tiene un máximo de 250 caracteres"),
    userName: Yup.string()
        .required("El nombre de usuario es requerido")
        .min(5, "El username requiere mas de 5 caracteres")
        .max(100, "El campo tiene un máximo de 100 caracteres"),
    password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña requiere mas de 8 caracteres")
        .max(50, "La contraseña no puede exceder los 50 caracteres"),
    passwordConfirm: Yup.string().required("Es requerido confirmar la contraseña")
        .oneOf([Yup.ref("password"), null],"Las contraseñas deben coincidir"),
});