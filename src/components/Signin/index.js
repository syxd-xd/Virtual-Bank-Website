import React from 'react'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormLabel, FormInput, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> Virtual Bank  </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to you account </FormH1>
                            <FormLabel htmlFor='for' > Email </FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'> Password </FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit' > Continue </FormButton>
                            <Text> Forgot Password </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
