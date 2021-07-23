const form = document.querySelector('#reservation');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let guests = document.createElement('span');
    let date = document.createElement('span');
    let time = document.createElement('span');
    let phone = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    date.textContent = doc.data().date;
    time.textContent = doc.data().time;
    phone.textContent = doc.data().phone;
    guests.textContent = doc.data().guests;


    li.appendChild(name);
    li.appendChild(guests);
    li.appendChild(date);
    li.appendChild(time);
    li.appendChild(phone);

    cafeList.appendChild(li);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('reservation').add({
        name: form.name.value,
        guests: form.guests.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value
    });
    form.name.value = '';
    form.guests.value = '';
    form.phone.value = '';
    form.date.value = '';
    form.time.value = '';
});