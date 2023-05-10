// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//   console.log("Success!", res);
//   return res.json();
// })
// .catch(e => {
//   console.log("Failed!", e)
// })

const getStarWars = async () => {
  try {
  const res = await fetch('https://swapi.dev/api/people/1/');
  const data = await res.json();
  console.log(data.name, data.height);
  const res2 = await fetch('https://swapi.dev/api/people/2/');
  const data2 = await res2.json();
  console.log(data2.name, data2.height);
} catch (e) {
  console.log('Error!', e);
}
};

getStarWars();