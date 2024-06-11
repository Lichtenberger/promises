// numbersapi facts
let random1 = Math.round(Math.random() * 100)
console.log(random1)
let random2 = Math.round(Math.random() * 100)
console.log(random2)
let random3 = Math.round(Math.random() * 100)
console.log(random3)
let random4 = Math.round(Math.random() * 100)
console.log(random4)
// promise to be resolved (hopefully)
let baseURL = `http://numbersapi.com`;

axios
  .get(`${baseURL}/${random1}/trivia`)
  .then(res => {console.log(res)
    return axios.get(`${baseURL}/${random2}/trivia`)
  })
  .then(res => {console.log(res)
    return axios.get(`${baseURL}/${random3}/trivia`)
  })
  .then(res => {console.log(res)
    return axios.get(`${baseURL}/${random4}/trivia`)
  })
  .then(res => {console.log(res)})
  .catch(err => console.log(err));