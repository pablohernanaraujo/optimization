import React, { FunctionComponent, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { ScreenWrapper } from '../../../ui/screen-wrapper';
import { Group } from '../../../ui/group';
import { TextField } from '../../../ui/text-field';
import { Submit } from '../../../ui/buttons';
import { Spacer } from '../../../ui/spacer';
import { H2, P } from '../../../ui/typography';
import { auth, database } from '../../../firebase';

interface Inputs {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState,
    reset,
    watch,
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data: Inputs) => {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(({ user }) => {
        const setUser = database.ref('users/' + user?.uid);
        if (user) {
          setUser.set({
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            role: 'default',
          });
        }
        reset();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError('confirmPassword', {
          type: 'error',
          message: error.message,
        });
      });
  };

  return (
    <ScreenWrapper>
      <Group type="header">
        <H2>Registrarse</H2>
      </Group>
      <Group type="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            validation={register({
              required: 'The field is required',
              minLength: {
                value: 3,
                message: 'Must be at least 3 letters',
              },
            })}
            error={errors.name?.message}
            autocomplete={false}
          />
          <TextField
            name="lastname"
            type="text"
            label="Lastname"
            placeholder="Enter your lastname"
            validation={register({
              required: 'The field is required',
              minLength: {
                value: 3,
                message: 'Must be at least 3 letters',
              },
            })}
            error={errors.lastname?.message}
            autocomplete={false}
          />
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
          <TextField
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Confirm your password"
            validation={register({
              required: 'The field is required',
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            })}
            error={errors.confirmPassword?.message}
            autocomplete={false}
          />
          <Spacer />
          <Submit
            text="Register"
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
