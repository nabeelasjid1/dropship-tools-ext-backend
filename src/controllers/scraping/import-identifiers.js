import DB from "../../database";

export const importIdentifiers = async (req, res) => {
  try {
    const { data, type } = req.body;
    for (let i = 0; i < data.length; i++) {
      const item = await DB.catalogs.findOne({ where: { identifierType: type, identifier: data[i].identifier } });
      if (!item) {
        await DB.catalogs.create({ identifierType: type, identifier: data[i].identifier });
      }
    }
    return res.status(200).json({
      success: true,
      message: "data saved",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export default importIdentifiers;
