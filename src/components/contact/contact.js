const contactStyles = [
  'flex',
  'w-1/3',
  'flex-col',
  'justify-center',
  'gap-2',
  'border-2',
  'border-solid',
  'p-4',
];

const headingStyles = ['text-lg', 'font-bold'];

function createAddress() {
  const address = document.createElement('div');
  const heading = document.createElement('h2');
  const street = document.createElement('p');
  const cityAndZipcode = document.createElement('p');

  heading.textContent = 'Address';
  heading.classList.add(...headingStyles);
  address.appendChild(heading);

  street.textContent = '3725 Burger Drive';
  address.appendChild(street);

  cityAndZipcode.textContent = 'Burgerville, CA 11117';
  address.appendChild(cityAndZipcode);

  return address;
}

function createTelephone() {
  const telephone = document.createElement('div');
  const heading = document.createElement('h2');
  const phoneText = document.createElement('p');

  heading.textContent = 'TEL';
  heading.classList.add(...headingStyles);
  telephone.appendChild(heading);

  phoneText.textContent = '(777)-111-8888';
  telephone.appendChild(phoneText);

  return telephone;
}

function createEmail() {
  const email = document.createElement('div');
  const heading = document.createElement('h2');
  const emailText = document.createElement('p');

  heading.textContent = 'Email';
  heading.classList.add(...headingStyles);
  email.appendChild(heading);

  emailText.textContent = 'burgerTime@burgerzone.com';
  email.appendChild(emailText);

  return email;
}

function createContact() {
  const contact = document.createElement('div');
  const address = createAddress();
  const telephone = createTelephone();
  const email = createEmail();

  contact.appendChild(address);
  contact.appendChild(telephone);
  contact.appendChild(email);
  contact.classList.add(...contactStyles);

  return contact;
}

export default createContact;
