import React, { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { isAuth, user } from '../../store';
import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { TextField } from '../../ui/text-field';
import { Submit } from '../../ui/buttons';
import { Spacer } from '../../ui/spacer';
import { H2, P } from '../../ui/typography';
import { auth, database } from '../../firebase';

interface Inputs {
  email: string;
  password: string;
}

export const Login: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState,
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const setIsAuth = useSetRecoilState(isAuth);
  const setUserData = useSetRecoilState(user);

  const onSubmit = (data: Inputs) => {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(({ user }) => {
        const getUser = database.ref('users');
        if (user) {
          getUser.child(user?.uid).on('value', (snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setIsAuth(true);
              setUserData(userData);
            } else {
              console.log('No data available');
            }
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        console.log('ERROR', error);
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          setError('password', {
            type: 'unexist',
          });
        }
        if (error.code === 'auth/wrong-password') {
          setError('password', {
            type: 'wrong-password',
          });
        }
      });
  };

  return (
    <ScreenWrapper>
      <Group type="header">
        <H2>Ingresar</H2>
      </Group>
      <Group type="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            type="text"
            label="Email"
            placeholder="Ingrese su email"
            validation={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
            error={
              (errors.email &&
                errors.email.type === 'required' &&
                'El campo email es requerido') ||
              (errors.email &&
                errors.email.type === 'pattern' &&
                'El email es invalido') ||
              undefined
            }
            autocomplete={false}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Ingrese su password"
            validation={register({ required: 'Required', minLength: 3 })}
            error={
              (errors.password &&
                errors.password.type === 'required' &&
                'El campo contraseña es requerido') ||
              (errors.password &&
                errors.password.type === 'minLength' &&
                'Debe tener mínimo 3 letras') ||
              (errors.password &&
                errors.password.type === 'unexist' &&
                'El usuario es inexistente') ||
              (errors.password &&
                errors.password.type === 'wrong-password' &&
                'La contraseña es incorrecta') ||
              undefined
            }
            autocomplete={false}
          />
          <Spacer />
          <Submit
            text="Login"
            disabled={!formState.isDirty || !formState.isValid}
            loading={loading}
          />
        </form>
      </Group>
      <Group type="footer">
        <Spacer />
        <P color="white">React development optimization 2021</P>
      </Group>
    </ScreenWrapper>
  );
};
