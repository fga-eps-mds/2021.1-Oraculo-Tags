const { Tag } = require("../Model/Tag");

async function createTag(req, res) {
    const { name, color } = req.body;

    const newTag = await Tag.create({ name, color });
    if (newTag) {
        return res.status(200).json(newTag);
    }

    return res.status(500).json({ error: "could not create a new tag. try again" });
}

module.exports = { createTag };
