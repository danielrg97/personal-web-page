
import React from "react";
import { ErrorMessage, Field, Form, withFormik } from "formik";
import RegisterSchema from './schema';

const FormRegister = ({handleSubmit}) =>{
    return (
      <Form onSubmit={handleSubmit} className="formRegister" id="formRegister">
        <Field type="text" name="names">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={"Ingrese sus nombres"}
                />
                <br/>
                <ErrorMessage name="names" component={"div"}>
                {(message) => (
                    <div>
                        <div className="ui pointing red basic label">{message}</div>
                    </div>
                )}
                </ErrorMessage>
            </div>
            )}
        </Field>

        <Field type="text" name="lastNames">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={"Ingrese sus apellidos"}
                />
                <br/>
                <ErrorMessage name="lastNames" component={"div"}>
                {(message) => (
                    <div>
                        <div className="ui pointing red basic label">{message}</div>
                    </div>
                )}
                </ErrorMessage>
            </div>
            )}
        </Field>
        <Field type="text" name="email">
            {({ field: { value, name, onBlur, onChange } }) => (
            <div>
                <input
                    type="email"
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={"Ingresa tu e-mail"}
                />
                <br/>
                <ErrorMessage name="email" component={"div"}>
                {(message) => (
                    <div>
                        <div className="ui pointing red basic label">{message}</div>
                    </div>
                )}
                </ErrorMessage>
            </div>
        )}
        </Field>
        <Field type="text" name="userName">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
              <input
                type="text"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su nombre de usuario"}
              />
              <br/>
              <ErrorMessage name="userName" component={"div"}>
                {(message) => (
                  <div>
                    <div className="ui pointing red basic label">{message}</div>
                  </div>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
        <Field type="password" name="password">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
              <input
                type="password"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su contraseña"}
              />
              <br />
              <ErrorMessage name="password" component={"div"}>
                {(message) => (
                  <div>
                    <div className="ui pointing red basic label">{message}</div>
                  </div>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
        <Field type="password" name="passwordConfirm">
        {({ field: { value, name, onBlur, onChange } }) => (
            <div>
            <input
              type="password"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Confirme la contraseña"}
            />
            <br />
            <ErrorMessage name="passwordConfirm" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      </Form>
    );
}

export default withFormik({
  mapPropsToValues: () => ({ username: "" }),
  validationSchema: RegisterSchema,
  handleSubmit: (values, {props}) => {
      //Paso el submit por props para poder hacer el metodo en el componente padre y desacoplar el formulario
      props.submit(values);
  }
})(FormRegister);