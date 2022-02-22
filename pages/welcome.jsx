import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Router from "next/router";

export default function WelcomePage() {
  return (
    <Container maxWidth="xs">
        <h1>Wecome {data.name}</h1>
        <Button 
          type="button" 
          variant="contained" 
          color="primary" fullWidth
          onClick={() => Router.push('/sign_in')}>Sign out</Button>
    </Container>
  )
}
