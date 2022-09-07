const { text } = require('body-parser');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

function subtractWeeks(numOfWeeks, date = new Date()) {
    date.setDate(date.getDate() - numOfWeeks * 7);

    return date;
  }

// Get customers
router.get('/', async (req, res) => {
    const customers = await loadCustomersCollection();
    res.send(await customers.find({}).toArray());
    // res.send("Hello")
});

// Add Post locations
router.post('/', async (req, res) => {
    const customers = await loadCustomersCollection();
    await customers.insertOne({
        locationId: req.params.id,
        name: text,
        startDate: subtractWeeks(Math.random(), new Date()),
        endDate: subtractWeeks(Math.random(), new Date())
        // _id:6317716985645cc431b4f7da
        // firstName:"kent"
        // phone:"555-999-7898"
        // lastName:"taylor"
        // email:"kredfox4@gmail.com"

    });
    res.status(201).send("Finished!");
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const customers = await loadCustomersCollection();
    await customers.deleteOne({ _id: mongodb.ObjectId(req.params.id)});
    console.log(mongodb.ObjectId(req.params.id))
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