import fetch from 'node-fetch';

function askMicroservice() {
  const url = `${process.env.CATEGORY_SERVICES}/category/allCategories`;
  
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * @param {object} 
 * @returns {Promise.<Object>}
 */
async function getCategories() {
  const response = await askMicroservice();
  if (response.status !== 200 && response.status !== 400) {
    throw new Error('Failed fetching user FavoriteList');
  }
  
  const jsonResponse = await response.json();
  return jsonResponse.data;
}

export default getCategories;