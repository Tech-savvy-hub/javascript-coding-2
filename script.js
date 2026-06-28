let contactBook = [];

// add new contact
function addContact(name, phone, email){
    let newContact = {
        name: name,
        phone: phone,
        email: email
    };
    contactBook.push(newContact);
    console.log(`Successfully added: ${name}`)
}
// search by name
function searchContact(searchName){
    console.log(`\n--- Searching for: "${searchName}" ---`)
    let foundContact = contactBook.find(contact => contact.name.toLowerCase() === searchName.toLowerCase())

    if (foundContact){
        console.log(`Name: ${foundContact.name}`);
        console.log(`Phone: ${foundContact.phone}`);
        console.log(`Email: ${foundContact.email}`);
    }else{
        console.log(`"${searchName}" not found`);
    }
}

// list all contacts alphabetically by name
function listContacts() {
    console.log("\n--- Contact List (Alphabetically) ---");
    contactBook.sort((a, b) => a.name.localeCompare(b.name));

    contactBook.forEach(contact => {
        console.log(`- ${contact.name} | Phone: ${contact.phone} | Email: ${contact.email}`);
    })
}


addContact("Zendaya Coleman", "+234 9064019245", "zendaya@gmail.com");
addContact("Alex Mercer", "+234 9088734144", "alex@gmail.com");
addContact("Oluwaseun Ayo", "+234 9018823663", "seun@gmail.com");
addContact("Bianca Silva", "+234 9052116989", "bianca@gmail.com");
addContact("Chidi Collins", "+234 9087433766", "chidi@gmail.com");

listContacts();

searchContact("alex Mercer");
searchContact("nneka ebubu")