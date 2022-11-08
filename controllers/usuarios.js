const {response} = require('express');
var cors = require('cors')

const usuariosGet = (req, res = response) => {
  const{q, nombre = "no name" ,apikey, page = 1, limit} = req.query;

  
    res.json({
        msg:" api GET desde controlador",
        q, nombre, apikey, page, limit
    });
  }

  const usuariosPost = (req, res) => {
    res.json({
        msg:" api POST desde controlador"
    });
  }
  const usuariosPut = (req, res) => {
    res.json({
        msg:" api PUT desde controlador"
    });
  }
  const usuariosPatch = (req, res) => {
    res.json({
        msg:" api PATCH desde controlador"
    });
  }

  const usuauriosDelete = (req, res) => {
    res.json({
        msg:" api DELETE desde controlador"
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuauriosDelete
};