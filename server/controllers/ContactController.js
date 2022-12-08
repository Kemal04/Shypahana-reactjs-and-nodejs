const express = require("express");
const { Contact } = require("../models/models")

exports.get_contacts = async (req, res) => {

    const contacts = await Contact.findAll();

    res.json({
        contacts: contacts,
        action: req.query.action
    });
}

exports.post_contact_create = async (req, res) => {
    const name = req.body.name
    const email = req.body.email;
    const subject = req.body.subject;
    const comment = req.body.comment;

    try {
        await Contact.create({
            name: name,
            email: email,
            subject: subject,
            comment: comment
        });
        res.json({ success: "Teswiriňiz bize gowşuryldy" });
    }
    catch (err) {
        console.log(err);
    }
}
