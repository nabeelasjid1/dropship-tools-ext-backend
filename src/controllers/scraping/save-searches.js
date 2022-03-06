import DB from "../../database";

export const saveSearches = async (req, res) => {
  try {
    const { searchLink, marketplace } = req.body;
    const search = await DB.searches.findOne({ where: { searchLink } });
    if (!search) {
      await DB.searches.create({ marketplace, searchLink });
    }
    return res.status(200).json({
      success: true,
      message: "data saved",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export default saveSearches;
