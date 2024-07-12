import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products() {
  
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
