const mongoose = require('mongoose');

function getDbUser() {
  return [
    {
      firebase_id: '',
      firstName: 'Ricardo Vieira Rava',
      lastName: 'Ricardo Vieira Rava',
      email: 'vieiraraba@gmail.com',
      profilePicture:
        'https://res.cloudinary.com/dkp5xa3sw/image/upload/v1664980443/Profile%20Picture/b4351e0df30d35991100ddb18d4375ae_mbnaff.jpg',
      gender: 'Male',
      genre: 'Hip-Hop',
    },
    {
      firebase_id: '',
      userName: 'Javier Fernández',
      email: 'dogsouldev@gmail.com',
      profilePicture:
        'https://res.cloudinary.com/dkp5xa3sw/image/upload/v1664980443/Profile%20Picture/7d4b866e3017dbf878d26c0c427d94e1_ov2ucv.jpg',
      gender: 'Male',
      genre: 'Blues',
    },
    {
      firebase_id: '',
      userName: 'Alejandro Gaerste',
      email: 'alejandrogaerste411@gmail.com',
      profilePicture:
        'https://res.cloudinary.com/dkp5xa3sw/image/upload/v1664980446/Profile%20Picture/cb7a9b3ccda100ccafd578c9a4e4b15f_fibn5u.jpg',
      gender: 'Male',
      genre: 'Chill-Out',
    },
    {
      firebase_id: '',
      userName: 'Adria Vallés Baradad ',
      email: 'adriavallesbaradad@gmail.com',
      profilePicture:
        'https://res.cloudinary.com/dkp5xa3sw/image/upload/v1664980443/Profile%20Picture/d5a9d8f67533f0690a4010681f546671_locu9b.jpg',
      gender: 'Male',
      genre: 'Pop',
    },
    {
      firebase_id: '',
      userName: 'Marcel Barreiro',
      email: 'marcelbarreiro@gmail.com',
      profilePicture:
        'https://res.cloudinary.com/dkp5xa3sw/image/upload/v1664980443/Profile%20Picture/c663651a105217e965193a5b9f3cc78a_vatbh8.jpg',
      gender: 'Male',
      genre: 'Regueton',
    },
  ];
}

module.exports = { getDbUser };
