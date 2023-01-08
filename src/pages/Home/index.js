import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Google } from 'assets/icons/icon-google.svg'
import BootstrapLogo from 'assets/images/bootstrap-logo.svg'

function Home() {
  return (
    <Container>
      <Row className='justify-content-center align-items-center' style={{
        height: '100vh',
      }}>
        <Col lg='8' xl='4'>
          <div className="form-header text-center mb-4">
            <Image src={BootstrapLogo} className="mb-3" />
            <h1 className="h2">Log in to your account</h1>
            <div>Welcome back! Please enter your details.</div>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Row className="mb-3 justify-content-between">
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formCheckbox">
                  <Form.Check type="checkbox" label="Rememer me" />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Link to='#'>Forgot password</Link>
              </Col>
            </Row>

            <div className="d-grid gap-2 mb-4">
              <Button variant="primary" type="submit">Sign in</Button>
              <Button variant="outline-primary">
                <Google style={{
                  width: '16px',
                  height: '16px',
                  margin: '-3px 8px 0 0',
                  color: 'currentColor'
                }}/>
                Sign in with Google
              </Button>
            </div>
            <div className="text-center">
              Don’t have an account? <Link to='#'>Sign up</Link>
            </div>
          </Form>
        </Col>
      </Row>

    </Container>


  );
}

export default Home;