var db = [];
let givenName = document.querySelector('#givenName');
let familyName = document.querySelector('#familyName');
let phoneNumber = document.querySelector('#phoneNumber');

givenName.addEventListener("change", getGivenName);
familyName.addEventListener("change", getFamilyName);
phoneNumber.addEventListener("change", getPhoneNumber);


 function getGivenName(e){
        return givenName.value;
 }

 function getFamilyName(e){
        return familyName.value;
 }

 function getPhoneNumber(e){
        return phoneNumber.value;
 }


class ContactManager{
 constructor(givenName, familyName, phoneNumber){
   this.givenName = givenName;
   this.familyName = familyName;
   this.phoneNumber = phoneNumber;
   //ContactManager.numberOfContacts++; 
 } 
}

ContactManager.numberOfContacts = 0;

function addContact(){
  let firstname = getGivenName();
  let lastname = getFamilyName();  
  let phonenumber = getPhoneNumber();
  
  let newContact = new ContactManager(firstname, lastname, phonenumber);
  db.push(newContact);
  
  givenName.value = "";
  familyName.value = "";
  phoneNumber.value = "";
  
  listContact(db);
  checkCount();
}


function listContact(addedContact){
    let listholder = document.getElementById("listholder");
    listholder.innerHTML = "";
    addedContact.forEach(function(element, index, arr){
      let listitem = document.createElement("li");    
      listitem.classList.add("styleList");
      listitem.innerHTML += "Name: " + arr[index].givenName + ' ' + arr[index].familyName + ', ' + 'Phone Number: ' + arr[index].phoneNumber;    
      listholder.appendChild(listitem);
  });
} 


function checkCount(){  
    var contactCount = document.getElementById("contactCount");
    var contactProgress = document.getElementById("contactProgress");

    ContactManager.numberOfContacts++;

    contactCount.innerHTML = "Total Record: " + ContactManager.numberOfContacts;
    contactProgress.value = ContactManager.numberOfContacts;
}