import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { isAuth, user } from '../../../store';
import { ScreenWrapper } from '../../../ui/screen-wrapper';
import { Group } from '../../../ui/group';
import { TextField } from '../../../ui/text-field';
import { Submit } from '../../../ui/buttons';
import { Spacer } from '../../../ui/spacer';
import { H2, P } from '../../../ui/typography';
import { auth, database } from '../../../firebase';

interface Inputs {
  email: string;
  password: string;
}

export const Login: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, setError, formState, reset } =
    useForm<Inputs>({
      mode: 'onChange',
    });
  const setIsAuth = useSetRecoilState(isAuth);
  const setUserData = useSetRecoilState(user);
  const history = useHistory();

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
            reset();
            setLoading(false);
            history.push('/optimization');
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('password', {
          type: 'error',
          message: error.message,
        });
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
            placeholder="Enter your email"
            validation={register({
              required: 'The field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'The email is invalid',
              },
            })}
            error={errors.email?.message}
            autocomplete={false}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            validation={register({
              required: 'The field is required',
              minLength: {
                value: 6,
                message: 'Must be at least 6 letters',
              },
            })}
            error={errors.password?.message}
            autocomplete={false}
          />
          <Spacer />
          <Submit
            text="Login"
            disabled={!formState.isDirty || !formState.isValid}
            loading={loading}
          />
          <Spacer size="l" />
        </form>
      </Group>
      <Group type="footer">
        <Spacer />
        <P color="white">React development optimization 2021</P>
      </Group>
    </ScreenWrapper>
  );
};
