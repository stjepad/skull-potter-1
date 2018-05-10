// Purpose: Build the commission form
const $ = require("jquery")
const api = require("../api/APIManager")

const buildCommissionForm = function (id) {

    // What customer selected
    api.getSingleAnimal(id).then(animal => {
        const output = $("#commissionWork")
        const fragment = document.createDocumentFragment()

        // Customer info (name, address, phone number, email)

        const inputFieldFactory = (classlist, defaultPlaceHolder, type) => {

            const inputField = document.createElement("input")
            inputField.setAttribute("type", type)
            inputField.classList = classlist
            inputField.placeholder = defaultPlaceHolder
            return inputField}

        const newTaskSection = document.querySelector("#inputInfo")


        const inputContainer = document.createElement("div")
        inputContainer.classList = "inputForm"

        //First Name
        const firstName = inputFieldFactory("form--firstName", "First Name", "text")
        inputContainer.appendChild(firstName)
        // Last Name
        const lastName = inputFieldFactory("form--lastName", "Last Name", "text")
        inputContainer.appendChild(lastName)
        // address ()
        const address = inputFieldFactory("form--address", "Address", "text")
        inputContainer.appendChild(address)
        // phone number
        const phoneNumber = inputFieldFactory("form--phoneNumber", "Phone Number", "text")
        inputContainer.appendChild(phoneNumber)
        // email
        const email = inputFieldFactory("form--email", "Customer E-mail", "text")
        inputContainer.appendChild(email)
        // Type of animal
        const typeOfAnimal = inputFieldFactory("form--typeOfAnimal", "Type of Animal", "text")
        inputContainer.appendChild(typeOfAnimal)
        // Quantity of animals
        const quantityContainer = document.createElement("div")
        quantityContainer.classList = "form-group"

        const quantityLabel = document.createElement("label")
        quantityLabel.textContent = "Quantity"

        const quantity = document.createElement("input")
        quantity.classList = "form-control"
        quantity.type = "number"
        quantity.min = 1
        quantity.max = 10
        quantityContainer.appendChild(quantityLabel)
        quantityContainer.appendChild(quantity)
        inputContainer.appendChild(quantityContainer)

        // Size

        const sizeContainer = document.createElement("div")
        sizeContainer.classList = "form-group"

        const quantityLabel = document.createElement("label")
        quantityLabel.textContent = "Quantity"

        const quantity = document.createElement("input")
        quantity.classList = "form-control"
        quantity.type = "size"
        quantity.min = 1
        quantity.max = 10
        sizeContainer.appendChild(quantityLabel)
        sizeContainer.appendChild(quantity)
        inputContainer.appendChild(sizeContainer)
        // Submit button

        const btn = document.createElement("BUTTON");
        let t = document.createTextNode("Submit Button");
        btn.appendChild(t);
        document.body.appendChild(btn);

        const x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        let checkBoxText = document.createTextNode("blah");
        document.body.appendChild(x)
        x.appendChild(checkBoxText);
        newTaskSection.appendChild(x)



        newTaskSection.appendChild(inputContainer)
        output.append(fragment)



    })








    // Mounted?

    // When you want it by (date field)


}

module.exports = buildCommissionForm