
function Person(name, phone, email, gender) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
}

function addNewUser() {
    var contacts = JSON.parse(localStorage.getItem('contacts') || "[]");
    var userName = $("#name").val();
    var phoneNum = $("#phone").val();
    var email = $("#email").val();
    var gender = $("#gender").val();

    var person = {
        'name': userName,
        'phone': phoneNum,
        'email': email,
        'gender': gender
    };

    contacts.push(person);
    localStorage.setItem('contacts', JSON.stringify(person));
}

$("#submit").click(addNewUser);