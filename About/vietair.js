$(document).ready(()=>{
    const data_vietair = [
        'VIETAIR IS A TIER-1 AGENT FOR 4 DOMESTIC AIRLINES AND MORE THAN 300 INTERNATIONAL AIRLINES, OFFERING A WIDE RANGE OF SERVICES FOR CUSTOMERS TO CHOOSE',
        'VIETAIR IS THE OFFICIAL REPRESENTATIVE OF AIR BUSAN AND AIR SEOUL IN VIETNAM, WHICH CONFIRMS OUR REPUTATION IN THE MARKET.',
        'VIETAIR HAS A VERY SMART FLIGHT DISPLAY SYSTEM TO MAKE IT EASY FOR CUSTOMERS TO CHOOSE.',
        "VIETAIR OFFERS ADDITIONAL SERVICES SUCH AS AIRPORT TRANSFERS, HOTEL BOOKINGS, TRAVEL INSURANCE, VISA PROCESSING... TO MAKE THE CUSTOMER'S TRIP AS CONVENIENT AND COMFORTABLE AS POSSIBLE",
        "VIETAIR HAS A DEDICATED, PROFESSIONAL TEAM READY TO SUPPORT 24/7 FOR EVERY PASSENGER FLIGHT. OVER THE PAST 19 YEARS, WE HAVE SERVED AND SATISFIED MORE THAN 5,000,000 AIR TICKET SALES, SERVING NEARLY 150,000 CUSTOMERS DOMESTICALLY AND INTERNATIONALLY.",
        "VIETAIR CONTINUOUSLY STRIVES TO PROVIDE CUSTOMERS WITH THE BEST PRODUCTS AND SERVICE QUALITY."
    ];
    let item_vietair = '';
    data_vietair.forEach(item =>{
        item_vietair += `<li >
                            <span class="icon_check">
                                <img src="https://tamvuong.com/Images/Desktop/Views/AboutUs/Introduction/VietAIR/iconfinder_check.png" alt="check icon"/>
                            </span>
                            <span class="text-uppercase fw-medium">${item}</span>
                        </li>`
    });
    $('#lua_chon_viettair').html(item_vietair);
});