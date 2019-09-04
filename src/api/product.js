const TAKHFIFAN_TEST_URL =
  "http://www.mocky.io/v2/5cd2bb7631000086283399be?mocky-delay=3000ms";

const fetchProducts = () =>
  fetch(TAKHFIFAN_TEST_URL).then(response => response.json());

export { fetchProducts };
