$(document).ready(function(){
    const DataLydo = [
        {
            title:"AFFORDABLE COST, GUARANTEED QUALITY:",
            text:" We commit to creating the highest quality of service at the most reasonable cost. The most notable products are COMBO Flight tickets & Hotels - saving up to 30% compared to booking separately; Admission tickets + day tours - saving up to 50% compared to buying directly at the sales point, with door-to-door transfers, no need to queue, and no worries about sold-out tickets."
        },
        {
            title:"DIVERSE PRODUCTS:",
            text:" We are proud to offer and bring to our customers a variety of unique products such as domestic and international package tours, combo flight tickets and hotels, admission tickets and day tours with over 500 experiential activities around the world from the best suppliers."
        },
        {
            title:"EASY BOOKING PROCESS:",
            text:" Customers just need to visit the website https://onetour.vn/ and choose the type of travel, leave information, and Onetour will contact and advise the most suitable itinerary."
        },
        {
            title:"ENHANCING CUSTOMER VALUE:",
            text:"Customers will always be supported before, during, and after the trip to always feel confident about their choice."
        }
    ];
    let item_lydo = ``;
    DataLydo.forEach(item =>{
        item_lydo += `
                        <li class="d-flex align-items-start fs-14">
                          <img class="pt-1 pe-2" src="https://tamvuong.com/Images/Desktop/Views/AboutUs/Introduction/Onetour/icon-star.png"/>
                          <span>
                          <span class="higthlight text-uppercase">
                          ${item.title}
                          </span>
                          ${item.text}</span>
                        </li>
                    `
    });

        $('#ly_do_onetour').html(item_lydo);

})