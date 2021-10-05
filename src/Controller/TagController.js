const { Tag } = require("../Model/Tag");

async function createTag(req, res) {
    const { name, color } = req.body;

    try {
        const newTag = await Tag.create({ name, color });
        return res.status(200).json(newTag);
    } catch (err) {
        return res.status(500).json({ error: "could not create a new tag. try again" });
    }
}

async function listTags(req, res) {
    try {
        const tags = await Tag.findAll({ attributes: ["id", "name", "color"] });
        return res.status(200).json(tags);
    } catch (err) {
        return res.status(500).json({ error: "could not list all tags" });
    }
}

module.exports = { createTag, listTags };
