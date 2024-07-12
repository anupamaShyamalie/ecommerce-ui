import styled from "styled-components";
import { mobile } from "../Responsive";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;   
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
font-size: 12px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border: 1px solid gray;
  margin: 10px 0px;
  ${mobile({ marginBottom: "5px" })}
`;

const Button = styled.button`

  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 15px;
  ${mobile({ width: "100%" })}`;

function Payment() {
  return (

    <>

    <Navbar/>
    <Announcement/>
    <Container>

      <Title>Payment</Title>
      <Wrapper>
        <Form>
          <FormItem>
            <Label>Payment Method</Label>
            <Input type="text" plaseholder="Payment Method" required />
          </FormItem>
          <FormItem>
            <Label>Order-Id</Label>
            <Input type="text" plaseholder="Order-Id" required />
          </FormItem>
          <FormItem>
            <Label>Amount</Label>
            <Input type="number" plaseholder="Amount" required />
          </FormItem>
          <FormItem>
            <Label>Currency</Label>
            <Input type="text" plaseholder="Currency" required />
          </FormItem>
          <FormItem>
            <Button>Pay</Button>
          </FormItem>
        </Form>
      </Wrapper>
    </Container>
    <NewsLetter/>
    <Footer/>
</>
  );
}

export default Payment;
