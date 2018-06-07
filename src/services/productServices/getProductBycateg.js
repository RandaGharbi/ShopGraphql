import fetch from 'node-fetch';

function askMicroservice(data) {
  const url = `${process.env.PRODUCTS_SERVICES}/products/getProductsbyCategory`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * @param {string} name
 * @param {string} description
 */
async function getProductBycategory(categories_id) {
  const response = await askMicroservice(categories_id);
  if (response.status !== 200 && response.status !== 400) {
    throw new Error('Failed fetching ');
  }
  
  const jsonResponse = await response.json();
  return jsonResponse.ProductsBycategory;
}

export default getProductBycategory;