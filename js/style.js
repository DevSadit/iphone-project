function getData(inpTxt) {
  return fetch(
    `https://openapi.programming-hero.com/api/phones?search=${inpTxt}`
  )
    .then((res) => res.json())
    .then((phones) => displayPhn(phones.data));
}
const displayPhn = (phones) => {
  const container = document.getElementById(`phone-container`);
  container.textContent = "";
  console.log(phones);

  // show-more-btn related work:
  const showMoreBtn = document.getElementById(`show-more-btn`);
  if(phones.length > 12){
    const newPhones = phones.slice(0,12);
    showMoreBtn.classList.remove(`hidden`);
  } else {
    showMoreBtn.classList.add(`hidden`);
  }

  phones.forEach((phone) => {
    const card = document.createElement(`div`);
    card.innerHTML = `
      <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="${phone.image}"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
      `;
    container.appendChild(card);
  });
};


const btnHandler = ()=>{
  const inpBox = document.getElementById(`inp-box`);
  const inpTxt = inpBox.value;
  // console.log(inpTxt)
  getData(inpTxt);
}

getData();
