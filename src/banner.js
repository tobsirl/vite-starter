export const addBanner = (text) => {
  const container = document.querySelector('#content');
  container.classList.add('bannerText');
  container.textContent = text;
};
