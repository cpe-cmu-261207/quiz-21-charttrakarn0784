async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const randBtn = document.getElementById("btn-random");
const imgProflie = document.getElementById("img-profile");
const profName = document.getElementById("p-name");
const profEmail = document.getElementById("p-email");
const profAddress = document.getElementById("p-address");

randBtn.onclick = async () => {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.results);
  const result = resp.data.results;
  imgProfile.src = result.picture.thumbnail;
};
