import React from "react";
import styled from "styled-components";
import { ProductComponent } from "../index";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div``;

const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ProgressCotainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ProductList = ({ title, columns, data, addToCart }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <ProductsContainer>
        {data.length > 0 ? (
          data.map(product => {
            return (
              <ProductComponent
                key={product[columns[4]]}
                picture={product[columns[0]]}
                name={product[columns[1]]}
                description={product[columns[2]]}
                price={product[columns[3]]}
                sku={product[columns[4]]}
                addToCart={addToCart}
              />
            );
          })
        ) : (
          <ProgressCotainer>
            <CircularProgress />
          </ProgressCotainer>
        )}
      </ProductsContainer>
    </Container>
  );
};

export default ProductList;
