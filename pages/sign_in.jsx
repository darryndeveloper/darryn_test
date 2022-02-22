import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import Router from "next/router";

export default function LoginPage() {
  const { 
      register,
      handleSubmit,
      formState: {errors},
    } = useForm();
  const onSubmit = (data) => Router.push('/welcome');
  return (
    <Container maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
                <TextField 
                variant="outlined" 
                label="email" 
                fullWidth 
                autoComplete="email" 
                autoFocus
                {...register("email", {
                    required: "Required field",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    }
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null }
                />
                <TextField 
                variant="outlined" 
                label="password" 
                fullWidth 
                autoComplete="password" 
                autoFocus
                {...register("password", {
                  required: "Required field",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/i,
                    message: "Password must contain 1 uppercase letter, 1 number and longer than 8 characters",
                  }
                })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null }
                />
            </Box>
            <Button 
            type="submit"
            variant="contained" 
            color="primary" fullWidth>Sign in</Button>
        </form>
        <Button 
          type="button" 
          variant="contained" 
          color="primary" fullWidth
          onClick={() => Router.push('/register')}>Register</Button>
    </Container>
  )
}
