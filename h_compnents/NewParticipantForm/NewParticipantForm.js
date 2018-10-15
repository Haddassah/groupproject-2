import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewParticipantForm = (props) => {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Plain Text (Static)</Label>
                    <Input plaintext>Some plain text/ static value</Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="firstName" className="mr-sm-2">First Name:</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="lastName" className="mr-sm-2">Last Name:</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                </FormGroup>


                <FormGroup>
                    <Label for="number">Number</Label>
                    <Input type="number" name="number" id="number" placeholder="Enter your phone number" />
                </FormGroup>
                <FormGroup>
                    <Label for="birthdate">Date of Birth</Label>
                    <Input type="birthdate" name="birthdate" id="birthdate" placeholder="birthdate placeholder" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTime">Time</Label>
                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleColor">Color</Label>
                    <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSearch">Search</Label>
                    <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input type="select" name="gender" id="gender" multiple>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
          </FormText>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" />{' '}
                        Option one is this and that—be sure to include why it's great
          </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
          </Label>
                </FormGroup>
            </Form>
        </Container>
    );
}


export default NewParticipantForm;