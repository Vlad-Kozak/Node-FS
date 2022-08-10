const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8")
    .then((r) => console.log(JSON.parse(r)))
    .catch(console.log);
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then((r) => console.log(JSON.parse(r).filter((r) => +r.id === contactId)))
    .catch(console.log);
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then((r) => {
      const contact = JSON.parse(r).filter((r) => +r.id !== contactId);

      console.log("The contact was deleted.");

      fs.writeFile(contactsPath, JSON.stringify(contact), "utf8").catch(
        console.log
      );
    })
    .catch(console.log);
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8")
    .then((r) => {
      data = JSON.parse(r);
      newContact = { id: String(data.length + 1), name, email, phone };
      data.push(newContact);

      console.log(`This contact was added: ${JSON.stringify(newContact)}`);

      fs.writeFile(contactsPath, JSON.stringify(data), "utf8").catch(
        console.log
      );
    })
    .catch(console.log);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
