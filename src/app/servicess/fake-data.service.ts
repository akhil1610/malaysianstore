import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  private restaurants: any = [];
  constructor() {
    this.restaurants = this.getData();
  }

  getRestaurant(restaurantId: string) {
    return this.restaurants.find((r) => r.id == restaurantId)
  }

  getData(): any[] {
    return [
      // Store #01
      {
        id: 'ZE00003',
        name: 'Malaysian Restaurant',
        raddress: 'Petaling Jaya. Selangor',
        reviewsCount: 6,
        qualification: 5,
        openingHour: 10,
        backgroundImage: 'assets/s1/banner/VegetarianFood.jpg',
        avatarImage: 'assets/s1/banner/VegetarianFood.jpg',
        logo: 'assets/s1/icon/logo_transparent.png',
        icon: '',
        phoneNumber: '60108200805',
        deliveryFee: 0.00,
        image: 'assets/s1/icon/logo_transparent.png',
        categories: [
          {
            id: 1,
            title: "Main",
            total: 2,
          },
          {
            id: 2,
            title: "Snacks",
            total: 2,
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Hara Bhara kabab",
            description: "Hara Bhara kabab 1pcs",
            price: 2.00,
            count: 0,
            image:
              "assets/s1/hara-bhara-kabab.jpg",
          },
          {
            id: 2,
            categoryId: 2,
            name: "Buff Vada",
            description: "Buff Vada 1pcs",
            price: 2.00,
            count: 0,
            image:
              "assets/s1/buff-vada.jpg",
          },
          {
            id: 3,
            categoryId: 3,
            name: "Aloo Vada",
            // description: "this is just example",
            price: 1.50,
            count: 0,
            image:
              "assets/s1/aloo-bonda.jpg",
          },
          {
            id: 4,
            categoryId: 2,
            name: "Veg Biryani",
            // description: "this is just example",
            price: 13.50,
            count: 0,
            image: "assets/s1/vegbiryani.jpg",
          },
          {
            id: 5,
            categoryId: 2,
            name: "Puran poli",
            description: "Puran poli 2pcs",
            price: 6.00,
            count: 0,
            image:
              "assets/s1/puran-poli.jpg",
          },
          {
            id: 6,
            categoryId: 4,
            name: "Dahi Vada",
            description: "Dahivada 1plate",
            price: 10.00,
            count: 0,
            image:
              "assets/s1/Dahivada.jpeg",
          },
          {
            id: 7,
            categoryId: 3,
            name: "Sev tameta nu shaak",
            description: "Sev tameta nu shaak",
            price: 9.50,
            count: 0,
            image:
              "assets/s1/sev-tameta-nu-shaak-recipe-1.jpg",
          },
          {
            id: 8,
            categoryId: 4,
            name: "Cheese Corn Tikki",
            description: "Cheese Corn Tikki 2pcs",
            price: 6.00,
            count: 0,
            image: "assets/s1/CheeseCornTikki.jpg",
          },
          {
            id: 9,
            categoryId: 2,
            name: "Paneer Tikki",
            description: "Paneer Tikki 2pcs",
            price: 6.00,
            count: 0,
            image: "assets/s1/Paneer_Tikkis.jpg",
          },
          {
            id: 10,
            categoryId: 4,
            name: "Aloo Tikki",
            description: "Aloo Tikki 1pcs",
            price: 1.50,
            count: 0,
            image: "assets/s1/Aloo-Tikki.jpg",
          },
          {
            id: 11,
            categoryId: 2,
            name: "Cheese Spring Roll",
            description: "Cheese Spring Roll 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/s1/Chinese-Spring-Roll.jpg",
          },
          {
            id: 12,
            categoryId: 4,
            name: "Khajoor Roll",
            description: "Khajoor Roll",
            price: 1.50,
            count: 0,
            image: "assets/s1/KhajoorRoll.jpg",
          },
          {
            id: 13,
            categoryId: 4,
            name: "Aloo sabji",
            description: "Aloo sabji",
            price: 5.00,
            count: 0,
            image: "assets/s1/1.jpeg",
          },
          {
            id: 14,
            categoryId: 4,
            name: "Methi thepla",
            description: "Methi thepla 1pcs.",
            price: 2.00,
            count: 0,
            image: "assets/s1/2.jpeg",
          },
          {
            id: 15,
            categoryId: 4,
            name: "Pav Bhaji",
            description: "Pav Bhaji 2pcs.",
            price: 8.00,
            count: 0,
            image: "assets/s1/3.jpeg",
          },
          {
            id: 16,
            categoryId: 4,
            name: "Bitroot Paratha",
            description: "Bitroot Paratha 1pcs.",
            price: 2.50,
            count: 0,
            image: "assets/s1/4.jpeg",
          },
          {
            id: 17,
            categoryId: 4,
            name: "Carrot halva",
            description: "Carrot halva",
            price: 5.00,
            count: 0,
            image: "assets/s1/5.jpeg",
          },
          {
            id: 18,
            categoryId: 4,
            name: "Beetroot Halwa",
            description: "Beetroot Halwa 500gm",
            price: 40.00,
            count: 0,
            image: "assets/s1/6.jpeg",
          },
          {
            id: 19,
            categoryId: 4,
            name: "Vada pav",
            description: "Vada pav 1pcs",
            price: 7.00,
            count: 0,
            image: "assets/s1/7.jpeg",
          },
          {
            id: 20,
            categoryId: 4,
            name: "Puri",
            description: "Puri 500gm.",
            price: 20.00,
            count: 0,
            image: "assets/s1/8.jpeg",
          },
          {
            id: 21,
            categoryId: 4,
            name: "dabeli",
            description: "dabeli 1pcs",
            price: 7.00,
            count: 0,
            image: "assets/s1/9.jpeg",
          },
          {
            id: 22,
            categoryId: 4,
            name: "Crispi Bhakhri",
            description: "Crispi Bhakhri 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/s1/10.jpeg",
          },
          {
            id: 23,
            categoryId: 4,
            name: "Ragda Petis",
            description: "Ragda Petis 1pcs",
            price: 8.00,
            count: 0,
            image: "assets/s1/11.jpeg",
          },
          {
            id: 24,
            categoryId: 4,
            name: "Gulab jamun",
            description: "Gulab jamun 3ps",
            price: 5.00,
            count: 0,
            image: "assets/s1/12.jpeg",
          },
          {
            id: 25,
            categoryId: 4,
            name: "Carrot Paratha",
            description: "Carrot Paratha 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/s1/13.jpeg",
          },
          {
            id: 26,
            categoryId: 4,
            name: "Carrot halva",
            description: "Carrot halva RM 5.",
            price: 5.00,
            count: 0,
            image: "assets/s1/14.jpeg",
          },
          {
            id: 27,
            categoryId: 4,
            name: "Poha Chevda",
            description: "Poha Chevda 500gm.",
            price: 30.00,
            count: 0,
            image: "assets/s1/16.jpeg",
          },
          {
            id: 28,
            categoryId: 4,
            name: "Methi Papad",
            description: "Methi Papad 1pcs.",
            price: 10.00,
            count: 0,
            image: "assets/s1/17.jpeg",
          },
          {
            id: 29,
            categoryId: 4,
            name: "Chili Pokoda",
            description: "Chili Pokoda 2 pcs.",
            price: 5.00,
            count: 0,
            image: "assets/s1/18.jpeg",
          },
        ],
      },
      // Store #02
      {
        id: 'ZE000017',
        name: 'Malaysian Hair Salon',
        raddress: 'Kuantan. Pahang',
        reviewsCount: 3,
        qualification: 5,
        openingHour: 10,
        backgroundImage: 'assets/s2/banner/Haircut.jpg',
        avatarImage: 'assets/s2/banner/Haircut.jpg',
        logo: 'assets/s2/icon/Capture-HairCutSaloon.PNG',
        icon: '',
        phoneNumber: '60139809689',
        deliveryFee: 0.0,
        image: 'assets/s2/icon/Capture-HairCutSaloon.PNG',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Man haircut 男士理发 Potongan rambut lelaki : RM15-30",
            description: "Make appointment for MAN haircut 预约男士理发 Buat temujanji untuk potongan rambut lelaki",
            price: 30.00,
            count: 0,
            image:
              "assets/s2/ManHaircut.jpg",

          },
          {
            id: 2,
            categoryId: 2,
            name: "Women haircut 女性理发 Potongan rambut wanita : RM20-50",
            description: "Make appointment for WOMEN haircut 预约女士理发 Buat janji untuk potongan rambut wanita",
            price: 50.00,
            count: 0,
            image:
              "assets/s2/WomenHaircut.jpg",
          },
          {
            id: 3,
            categoryId: 3,
            name: "Children haircut 儿童理发 Potongan rambut kanak-kanak : RM5-10",
            description: "Make appointment for CHILDREN haircut 预约儿童理发 Buat janji untuk potongan rambut kanak-kanak",
            price: 10.00,
            count: 0,
            image:
              "assets/s2/ChildrenHairCut.jpg",
          },

        ],
      },
      // Store #07
      {
        id: 'ZE00008',
        name: 'NoBrandDrink',
        raddress: 'Plaza Damas, Sri Hartamas. Kuala Lumpur.',
        reviewsCount: 4,
        qualification: 5,
        openingHour: 10,
        backgroundImage: 'assets/s7/banner/NoBrandDrink-BannerBackground.jpg',
        avatarImage: 'assets/s7/banner/NoBrandDrink-BannerBackground.jpg',
        logo: 'assets/s7/icon/NoBrandDrink-Logo3.png',
        icon: '',
        phoneNumber: '60108200805',
        deliveryFee: 3.00,
        image: 'assets/s7/icon/NoBrandDrink-Logo3.png',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Kopi Bungkus Kaw Kaw",
            description: "Coffee in the plastic bag. Local Kopitiam. ICE | PRE-ORDER *Only deliver every wednesday from 11am to 5pm, KL only *Last order on Tuesday 6pm",
            price: 3.60,
            count: 0,
            image:
              "assets/s7/NoBrandDrink-KopiBungkus-SKU1.PNG",
          },
          {
            id: 2,
            categoryId: 2,
            name: "Kopi Box Kaw Kaw",
            description: "Coffee in the seal container. Local Kopitiam. ICE  | PRE-ORDER *Only deliver every wednesday from 11am to 5pm, KL only *Last order on Tuesday 6pm",
            price: 3.80,
            count: 0,
            image:
              "assets/s7/NoBrandDrink-KopiBungkus-SKU2.PNG",
          },
        ],
      },
      // Store #03
      {
        id: 'ZE00006',
        name: 'Malaysian Durian',
        raddress: 'Damansara Perdana. Petaling Jaya. Selangor',
        reviewsCount: 4,
        qualification: 5,
        openingHour: 10,
        backgroundImage: 'assets/s3/banner/AhChongDurianMerchant-BackgroundImage.jpg',
        avatarImage: 'assets/s3/banner/AhChongDurianMerchant-BackgroundImage.jpg',
        logo: 'assets/s3/logo/Logo.jpeg',
        icon: '',
        phoneNumber: '60108200805',
        deliveryFee: 0.00,
        image: 'assets/s3/logo/Logo.jpeg',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Kampung Durian",
            description: "Raub old durian tree. All in boxes, 500grams each. All fresh from Pahang. Characteristics: bitter with a little sweet, do not like to eat sweet people do not waste time to ask and order. 都是盒装，每一盒500g. 特征：苦带一点甜，完全不喜欢吃甜的人千万别浪费时间询问和下单了. Raub老树A等.",
            price: 20.00,
            count: 0,
            image:
              "assets/s3/AhChongDurian-SKU1.PNG",
          },
          {
            id: 2,
            categoryId: 2,
            name: "D2, D7, D24, D78, D123, Hor Loh ,D144 Durian",
            description: "Raub old durian tree. All in boxes, 500grams each. All fresh from Pahang. Characteristics: bitter with a little sweet, do not like to eat sweet people do not waste time to ask and order. 都是盒装，每一盒500g. 特征：苦带一点甜， 完全不喜欢吃甜的人千万别浪费时间询问和下单了. Raub老树A等.",
            price: 35.00,
            count: 0,
            image:
              "assets/s3/AhChongDurian-SKU2.PNG",
          },
          {
            id: 3,
            categoryId: 3,
            name: "Musang King Durian",
            description: "Raub old durian tree. All in boxes, 500grams each. All fresh from Pahang. Characteristics: bitter with a little sweet, do not like to eat sweet people do not waste time to ask and order. 都是盒装，每一盒500g. 特征：苦带一点甜， 完全不喜欢吃甜的人千万别浪费时间询问和下单了. Raub老树A等.",
            price: 80.00,
            count: 0,
            image:
              "assets/s3/AhChongDurian-SKU3.PNG",
          },
        ],
      },


    ];
  }
}
