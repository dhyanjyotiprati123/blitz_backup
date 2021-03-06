import React from "react"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput, SignupInputType } from "app/auth/validations"


type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <div>
      <h1 style={{marginBottom:10, color:"white"}}>Create an Account</h1>

      <Form<SignupInputType>
        submitText="Create Account"
        schema={SignupInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signup({ email: values.email, password: values.password })
            props.onSuccess && props.onSuccess()
          } catch (error) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField name="text" label="Your Nmae" placeholder="Enter your name" />
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <LabeledTextField name="DOB" label="DOB" placeholder="Your DOB" />
      </Form>

    </div>
  )
}

export default SignupForm
