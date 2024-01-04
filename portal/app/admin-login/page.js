'use client'
import Image from 'next/image'
import css from '../style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Button,
  Form,
  FormGroup,
  Input,
  Label
 } from 'reactstrap';

export default function adminlogin() {
  return (
    <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
            <div classNameName="container">
	<header className="header">
		<h1 id="title" className="text-center">Sign In</h1>
	</header>
    <div class="form-wrap">	
        <Form className="form">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="fi_email"
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="fi_password"
              placeholder="Enter Password"
            />
          </FormGroup>
        <Button>Login</Button>
      </Form>
    </div>	
</div>
    </main>
    )
}
