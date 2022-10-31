const Kid = require('../models/kid')
const router = require('../routes')

const createKid = async (req, res) => {
  try {
    const kid = await new Kid(req.body)
    await kid.save()
    return res.status(201).json({
      kid
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllKids = async (req, res) => {
  try {
    const kids = await Kid.find()
    return res.status(200).json({ kids })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getKidById = async (req, res) => {
  try {
    const { id } = req.params
    const kid = await Kid.findById(id)
    if (kid) {
      return res.status(200).json({ kid })
    }
    return res.status(404).send('Kid with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteKid = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Kid.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Kid deleted')
    }
    throw new Error('Kid not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createKid,
  getAllKids,
  getKidById,
  deleteKid
}
