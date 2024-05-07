$(function(){
    const Package = ["FIT Leisure Package for groups under 10 individuals.","GIT Leisure Package for groups ranging from 10 to 30 individuals.","MICE/Incentive/Ad-hoc for groups ranging from 30 up to 600 individuals.","Off the Beaten Track Package.","Hiking/Trekking Package.","Nature Healing Tour.","Specific Tours: Culinary and Photography."]
    const Service = ["Flight Booking","Car Rental","Accommodation Booking","Off the Beaten Track Package","Travel Insurance","Visa Service: We provide assistance to foreigners entering Vietnam."];

    let itemPackage = ``;
    let itemService = ``;
    Package.forEach(item =>{
        itemPackage += `
                        <li class="section-list-item">${item}</li>
        
                        `
    });
    $('#package-list').html(itemPackage);
    Service.forEach(item =>{
        itemService += `
                        <li class="section-list-item">${item}</li>
                        `
    });
    $('#sevices-list').html(itemService);
})