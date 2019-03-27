class AddressBook {
    constructor(contacts){
      this.contacts = contacts;
    }
  
    add(contact) {
      this.contacts.push(contact);
    }
    
    deleteAt(index) {
      this.contacts.splice(index, 1);
    }
    
  
    display() {
      section.innerHTML = '';
      for (let i = 0; i < this.contacts.length; i++) {
        const contact = this.contacts[i];
        const div = document.createElement('div');
        const nameParagraph = document.createElement('p');
        const emailParagraph = document.createElement('p');
        const phoneParagraph = document.createElement('p');
        const relationParagraph = document.createElement('p');
        const button = document.createElement('button')
        nameParagraph.innerText = `Name: ${contact.name}`;
        emailParagraph.innerText = `Email: ${contact.email}`;
        phoneParagraph.innerText = `Phone: ${contact.phone}`;
        relationParagraph.innerText = `Relation: ${contact.relation}`;
        button.classList.add('trashIcon');
        button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  
        button.addEventListener('click', () => {
          this.deleteAt(i);
          this.display();
        });
        div.appendChild(nameParagraph);
        div.appendChild(emailParagraph);
        div.appendChild(phoneParagraph);
        div.appendChild(relationParagraph);
        div.appendChild(button);
        section.appendChild(div);
        div.classList.add('containerB');
      }
    }
  }
  
  
  class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  
  }
  
  const section = document.querySelector('.containerA');
  const addButton = document.querySelector('.addContact');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const relationInput = document.querySelector('#relation');
  
  
  
  const book = new AddressBook([new Contact('Alvin Lewis', 'alvlewis@hotmail.com', '(313) 475-6636', 'Me'), new Contact('Erica G. L. Hayes A.K.A. E-Bib', 'ELewis@gmail.com', '(313) 221-3810', 'Sister'), new Contact('Derek Fennicks', 'dontknow@gmail.com', '(313) 680-8060', 'Cousin')]);
  
  book.display();
  
  
  addButton.addEventListener('click', () => {
  book.add(new Contact (nameInput.value, emailInput.value, phoneInput.value, relationInput.value));
  book.display();
  })