import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #DA0037;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
     "Free shipping on orders over $50!"
    </Container>
  );
}

export default Announcement;
