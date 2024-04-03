$(document).ready(function(){
    const data_vietair = [
        "VietAIR is a tier-1 agent for 4 domestic airlines and over 300 international airlines, offering a wide range of services for customers to choose from.",
        "VietAIR is the official representative of the airlines Air Busan and Air Seoul in Vietnam, which confirms our credibility in the market.",
        "VietAIR has a very intelligent flight display system that makes it easy for customers to make their selections.",
        "VietAIR offers a range of supportive services alongside flights, such as airport transfers, hotel reservations, travel insurance, visa processing, and more, to make the customer's journey as convenient and comfortable as possible.",
        "VietAIR boasts a dedicated and professional team ready to offer 24/7 support for every flight. Over the past 19 years, we have served and satisfied more than 5 million flight tickets, serving nearly 150,000 customers both domestically and internationally.",
        "VietAIR continuously strives to provide customers with the best products and service quality."
    ];
    let item = '';
    data_vietair.forEach(item =>{
        item += `<li class="item_lydo">
                        <span>
                        <img src="./icon/icon-finder_check.png" alt="check"/>
                        </span>
                    <span>${item}</span> 
                    
                </li>`
    });
    $('#ly_do_vietair').html(item);
})