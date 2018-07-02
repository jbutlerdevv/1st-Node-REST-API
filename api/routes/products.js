const express = require('express');
const router = express.Router();//Sets up express router; Gives capability to handle different routes and endpoints

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if(id === 'special') {
    res.status(200).json({
      message: 'You dicovered the special ID',
      id: id
    });
  }else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});
router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  })
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  })
});

module.exports = router;