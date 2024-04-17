$(function(){
    const ListServices = [
        'Providing domestic and international flight tickets',
        'Visa services for Vietnamese abroad and foreigners entering Vietnam',
        'Special assistance services at the airport',
        'Hotel reservations',
        'Full-package tour services, organizing domestic and international events',
        'Providing tickets for visiting tourist attractions domestically and abroad',
        'Travel insurance',
        'Car rental'
    ];
    let itemService = ``;
    ListServices.forEach((item,index) =>{
        itemService += `
                        <li>${index + 1}. ${item}</li>
                        `
    });
    $('#listService').html(itemService);
    const ListVoucher = [
        'Enjoying special pricing policies when organizing tour programs.',
        "Free promotion of the company's logo and brand on Tam Vuong's website.",
        "Free room booking services, flight and transport ticket booking, visa processing...",
        "Receiving special care policies on special holidays throughout the year",
        "Invitations to Tam Vuong's annual Customer Conference programs"
    ];
    let itemVoucher = ``;
    
    ListVoucher.forEach(item =>{
        itemVoucher += `<li class="d-flex align-items-center gap-2">${item}</li>`;
    });
    $('#listVoucher').html(itemVoucher);
});