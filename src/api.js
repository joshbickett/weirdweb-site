export const getAIImage = async (search) => {
  // make a GET request to the following endpoint => https://lexica.art/api/v1/search?q=apples
  const url = `https://lexica.art/api/v1/search?q=${search}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);

  const images = data.images;
  console.log("images", images);
  return images;
};
