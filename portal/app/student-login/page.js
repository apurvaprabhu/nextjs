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

export default function studentlogin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
               <div classNameName="container">
               <header className="header">
		<h1 id="title" className="text-center">Sign Up</h1>
	</header>
  <div class="form-wrap">	
        <Form className="form">
                  <FormGroup>
            <Label for="name">Student Name </Label>
            <Input
              type="text"
              name="name"
              id="fi_name"
              placeholder="Enter Student Name"
            />
          </FormGroup>
                  <FormGroup>
            <Label for="contact">Contact Number </Label>
            <Input
              type="number"
              name="contact"
              id="fi_contact"
              placeholder="Enter Contact Number"
            />
          </FormGroup>
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
        <Button>Submit</Button>
      </Form>
    </div>
    </div>
    </main>
    )
}
