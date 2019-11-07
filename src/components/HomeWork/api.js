import axios from "axios";

async function getCardDetails() {
  let newPromise = new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/db.json').then((result) => {
      const {title, body, imgSrc} = result.data.example;
      resolve (result.data.example)
    })
  });
  return newPromise
}

export {getCardDetails}
