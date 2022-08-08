import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import FindBicycleForm from '../components/UI/FindBicycleForm';
import Helmet from '../components/Helmet//Helmet';
import { Container ,Row ,Col } from "reactstrap";
const Home = ()=>{
    return( <Helmet title="Home">
<section className="p-0 hero__slide-section">
    <HeroSlider />
    <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__bicycle-left">
                  <h2>Find your best Bicycle here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindBicycleForm />
              </Col>
            </Row>
          </Container>
        </div>
    </section>
    <section>
        </section>
    </Helmet>
    )
}
export default Home;