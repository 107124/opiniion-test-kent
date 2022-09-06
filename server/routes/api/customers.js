const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get customers
router.get('/', async (req, res) => {
    const customers = await loadCustomersCollection();
      res.send(await customers.find({}).toArray());
    // res.send("Hello")
});

// Add Post
router.post('/', async (req, res) => {
    const customers = await loadCustomersCollection();
    await customers.insertOne({
        text: req.body.text,
        createdAt: new Date(),

    });
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const customers = await loadCustomersCollection();
    await customers.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
});

async function loadCustomersCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://kredfox4:Foxymeb4u!@cluster0.re6l3nv.mongodb.net/test',
        {
            useNewUrlParser: true
        }
    );

    return client.db('opiniion_test_db').collection('customers');
}

module.exports = router;