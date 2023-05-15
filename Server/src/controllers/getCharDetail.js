const axios = require("axios");

const getCharDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    let data = response.data;

    if (data) {
      let objData = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };

      return res.status(200).json(objData);
    } else {
      res.status(500).json({ Error: "El personaje No existe" });
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

module.exports = { getCharDetail };
