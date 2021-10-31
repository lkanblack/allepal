let title = document.querySelector('#title');
let price = document.querySelector('#price');
let time = document.querySelector('#time');
let img = document.querySelector('#img');
let bids = document.querySelector('#bids');

// TIME

let deadline;




async function getResponse() {
    let response = await fetch('/js/response.json');
    let content = await response.json();
    img.src = content.imageUrl;
    title.innerHTML = content.title;
    price.innerHTML = content.currentPriceEur;
    bids.innerHTML = content.currentBids;

    let dateStart = new Date();
    let dateEnd = content.dateEnd;

    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);

    let dateEndDate = new Date(dateEnd);
    let hoursRange = Math.trunc((dateEndDate.getTime() - dateStart) / (1000 * 60 * 60) % 24);
    let days = 0;

    for(let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000){
        days += 1;
    }
    time.innerHTML = days -1 + ' päeva ' + hoursRange + ' tundi';

}

getResponse();

