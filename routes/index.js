var express = require('express');
var router = express.Router();
const panier= [/*{
  nomProduit:'',
  prixProduit:'',
  dateReservation:'',
  partieJour:'',
  idUser:''
}*/]


const user = [{
  email: 'adri@test',
  password: '1234',
  date: 'kkkkk'
}, {
  email: 'emma@test',
  password: '1234',
  date: ''
}]
// user
router.get('/user', (req, res) => {
  res.json(user)
})
router.post('/user', (req, res) => {
  user.push({
  email: req.body.email,
  password: req.body.password,
  date: req.body.date
  })
  res.send('OK')
})
// panier
router.get('/panier', (req, res) => {
  res.json(panier)
})
router.post('/panier', (req, res) => {
  panier.push({
  nomProduit: req.body.nomProduit,
  prixProduit: req.body.prixProduit,
  dateReservation: req.body.dateReservation,
  partieJour: req.body.partieJour,
  idUser: req.body.idUser

  })
  res.send('OKok')
})

router.delete('/panier', (req, res) => {
panier.splice(req.body.index,1)
  //panier.splice(0,panier.length)
  res.send('OKok')
  //delete panier;
})

//usless
/*router.post('/connect', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  if (email === 'adri@adri' && password === 'aaaa') {
    // l'utilisateur est connecté
  } else {

    res.status(400).send('Bouuuh mauvais mdp')

  }
})*/
module.exports = router
