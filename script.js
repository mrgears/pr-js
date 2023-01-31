// console.log('Hello!');

// const data = fetch("https://api.tvmaze.com/search/shows?q=girls")
// data.then((response) => {
//   return response.json()
// }).then((res) => {
//   console.log(res[0].show.image.medium)
//   const out = (res[0].show.image.medium)
//   document.querySelector('.img').src = out
// })

const img = document.querySelector('.img').src;
const tv = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  console.log(data[0].show.image.medium);
  const output = data[0].show.image.medium;
};

tv();
