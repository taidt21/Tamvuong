$(document).ready(function(){
    
    
    
    var swiper = new Swiper(".swiper_home", {
        slidesPerView: 1,
        grabCursor:true,
        spaceBetween: 0,
        loop: true,
        speed:1000,
        grabCursor:true,
        effect: 'slide',
        autoplay:{
            delay:5000,
        },    
              
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        
        
      });
      const data_product_link = [
            {
                name:" Airlines ticket",
                link:"https://vietair.com.vn/",
                icon:"icon/icon-flight-red.png"
            },
            {
                name:"Promotional Ticket",
                link:"https://vietair.com.vn/khuyen-mai-quoc-te",
                icon:"icon/icon-promotion-ticket-red.png"
            },
            {
                name:"Ticket and hotel combo",
                link:"https://onetour.vn/",
                icon:"icon/icon-combo-red.png"
            },
            {
                name:"Tour inbound",
                link:"https://asiamystika.com/",
                icon:"icon/day-tour-w-red.png"
            },
            {
                name:"Package Tour",
                link:"https://onetour.vn/tour-tron-goi",
                icon:"icon/compass-w-red.png"
            },
            {
                name:"Japan Railpass",
                link:"https://onetour.vn/japan-rail-pass.html#utm_source=tamvuong.com",
                icon:"icon/icon-rail-pass-red.png"
            }
      ];
      let item_product_link = ``;
      data_product_link.forEach(item =>{
        item_product_link += ` 
                            <li>
                                <a target="_blank class="d-flex align-items-center gap-2 py-2" href="${item.link}">
                                <span>
                                 <img src="${item.icon}" alt=""/>
                                </span>
                                <span>${item.name}</span>
                                </a>
                            </li>
                            `
      });
      $('#sidebar_nav').html(item_product_link);
      const data_procut_images = [
            {
                name:"Vietair",
                logo:"icon/logo_vietair_white.svg",
                image:"img/service_vietair.jpg",
                link:"https://vietair.com.vn/"
            },
            {
                name:"Onetour",
                logo:"icon/logo-onetour_white.png",
                image:"img/service_onetour.jpg",
                link:"https://onetour.vn/"
            },
            {
                name:"Asia mystika",
                logo:"icon/logo_inbound_white.svg",
                image:"img/service_inbound.jpg",
                link:"https://asiamystika.com/"
            }
      ];
      let item_product_images = ``;
      data_procut_images.forEach(item =>{
        item_product_images += `
                                <li>
                                    <a class="d-block position-relative" href="${item.link}">
                                    <span class="product_logo">
                                        <img src="${item.logo}" alt="${item.name}"/>
                                    </span>
                                    <img class="img-fluid image_product" src="${item.image}" alt="${item.name}"/>
                                    </a>
                                </li>
                                `
      });
      $('#product_images').html(item_product_images);

      const data_news = [
        {
            name:"VIETAIR - THE BRAND THAT PROVIDES ONLINE AIR TICKETS OF TAM VUONG GROUP",
            des:"VietAIR is an airline ticket agent headquartered at 116 Trung Kinh, Yen Hoa, Cau Giay, Hanoi. We are a brand owned by Tam Vuong Trading, Services and Tourism Joint Stock Company with 15 years of experience operating in the field of providing air tickets and tours.",
            image:"img/GN_01269.JPG",
            link:"https://tamvuong.com/tin-tuc/tin-moi/vietair-thuong-hieu-cung-cap-ve-may-bay-truc-tuyen-cua-tam-vuong-group.html"
        },
        {
            name:"Tam Vuong became the official representative of Air Seoul Airlines in Vietnam",
            des:"On November 14, at Pullman Hanoi Hotel, Air Seoul held a cooperation signing event and official launch in Vietnam and launched a flight connecting the capital Seoul with two major cities, Hanoi. and Nha Trang under the witness of Mr. Park Jong Sun - Chief Representative of the Korea Tourism Board in Vietnam and representatives of nearly 70 agents and travel companies. Tam Vuong Trading, Services and Tourism Joint Stock Company is the official representative of the company in Vietnam, with the role of bringing incentive programs and quality services to customers in Vietnam.",
            image:"https://tamvuong.com/Media/Images/le-ky-ket-hop-tac-1.JPG",
            link:"https://tamvuong.com/tin-tuc/tin-moi/tam-vuong-tro-thanh-dai-dien-chinh-thuc-cua-hang-hang-khong-air-seoul-tai-viet-nam.html",
        },
        {
            name:"Notice of change in business information",
            des:"",
            image:"https://tamvuong.com/Media/Images/B%C3%A0i%20%C4%91%C4%83ng%20fb%20(1200%20x%201200%20px)%20(4).jpg",
            link:"https://tamvuong.com/tin-tuc/tin-moi/thong-bao-thay-doi-thong-tin-doanh-nghiep.html"
        }
      ];
      let item_news = ``;
      data_news.forEach((item,index) =>{
        item_news += `
                        <div class="news_item">
                            <a class="d-block" href="${item.link}">
                                <img class="img-fluid img_news" src="${item.image}" alt="${item.name}" />
                            </a>
                            <div class="mt-3 news_item_content">
                            <h3 class="title_news">
                            <a href="${item.link}">${item.name}</a>
                            </h3>
                            <p class="des_news">${item.des}</p>
                            ${
                                index > 0 ? `<a class="d-block readMore_btn" href="${item.link}">Read more</a>` : '' 
                            }
                            </div>
                        </div>
                    `
      });
      $('#new_home').html(item_news)

      
    
});
