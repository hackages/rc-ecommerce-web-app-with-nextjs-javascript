import { faker } from '@faker-js/faker';

export function getAllProducts() {
    const fakeProducts = [];

    Array.from({ length: 10 }).forEach(() => {
        fakeProducts.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.datatype.number({
        min: 50,
        max: 100,
        }),
        image: faker.image.business(1280, 720, true),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({
        min: 10,
        max: 100,
        }),
  });
});

    return fakeProducts
}


export function getServerSideProps() {
  return {
    props: {
      products: getAllProducts()   
    }
  }
}