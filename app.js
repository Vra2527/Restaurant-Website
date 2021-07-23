const form = document.querySelector('#contact-form');

function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('catering').add({
        name:form.name.value,
        city:form.city.value,
        address1:form.address1.value,
        address2:form.address2.value,
        phone:form.phone.value,
        email:form.email.value,
        pincode:form.pincode.value,
        msg:form.msg.value,
        state:form.state.value
    });
    form.name.value='';
    form.city.value='';
    form.address1.value='';
    form.address2.value='';
    form.state.value='';
    form.msg.value='';
    form.phone.value='';
    form.pincode.value='';
    form.email.value='';
})

