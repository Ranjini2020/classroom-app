import React from "react";
import Home from '../components/home';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import Header from '../components/Header';

function About() {
  return (
    <div>
      <Header/>
      <Home backgroundImage="https://www.cambridge.org/elt/blog/wp-content/uploads/2014/03/iStock_000016678177Medium1.jpg">
        <h1>HUGO</h1>
        <h2>Helps you move forward!!</h2>
      </Home>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To HUGO Classroom!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              HUGO Classroom is a free, blended learning platform that offers a variety of benefits for both students and teachers. Whether you're a 1:1 class or you just rock the computer carts from time to time, HUGO Classroom can elevate your classroom's productivity and take workflow management to the next level.
              
            </p>
            <p>
              Since HUGO app is cloud-based - meaning they live on the internet than on hard drive and is accessible from any device. Students can work seamlessly wherever they are, without worrying about clunky flash drives, emailing files back and forth, or losing progress due to computer malfunction.

            </p>
            
          </Col>
       </Row>
       </Container>
    </div>
//   );
  )};

export default About;
