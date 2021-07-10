import diCaprio from './img/diCaprio.jpg'
import steveJobs from './img/steveJobs.jpg'
import lips from './img/lips.jpg'
import buda from './img/buda.jpg'
import spaceDog from './img/spaceDog.jpg'
import astroNube from './img/astroNube.jpg'
import banksy from './img/Banksy.jpg'
import banksyDJ from './img/banksyDJ.jpg'
var uniqid = require('uniqid');


const data = [{
  id: uniqid(),
  img: steveJobs,
  title: "Steve Jobs",
  homeImg: steveJobs,
  button: "add to cart",
  price: 89.99,
  finalPrice: 0,
  counts: 0
},
{
  id: uniqid(),
  img: diCaprio,
  title: "Leonardo diCaprio",
  homeImg: diCaprio,
  button: "add to cart",
  price: 99.99,
  counts: 0
},
{
  id: uniqid(),
  img: lips,
  homeImg: lips,
  title: "Lips",
  button: "add to cart",
  price: 19.99,
  counts: 0
},
{
  id: uniqid(),
  img: buda,
  homeImg: buda,
  title: "Buddha Poster",
  button: "add to cart",
  price: 29.99,
  counts: 0
},
{
  id: uniqid(),
  img: spaceDog,
  button: "add to cart",
  title: "Space Dog",
  price: 89.99,
  counts: 0
},
{
  id: uniqid(),
  img:astroNube,
  button: "add to cart",
  title: "Astro Cloud",
  price:29.99,
  finalPrice: 0,
  counts: 0
},
{
  id: uniqid(),
  img: banksy,
  button: "add to cart",
  title: "Banksy",
  price: 49.99,
  counts: 0
},
{
  id: uniqid(),
  img:banksyDJ,
  button: "add to cart",
  title: "Banksy DJ",
  price: 39.99,
  counts: 0
}
]

export default data;
