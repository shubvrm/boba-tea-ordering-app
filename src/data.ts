type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Brown Sugar Tea",
      desc: "Delight in our Brown Sugar Tea, a warm blend of premium tea leaves and sweet brown sugar. Satisfy your cravings with its rich, comforting flavor.",
      img: "/temporary/brown_sugar_tea.jpg",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Taro Tea",
      desc: "Experience our Taro Tea, a unique blend of taro root for a nutty taste and vibrant purple hue. Its creamy texture and subtle sweetness offer a great tea experience.",
      img: "/temporary/taro_tea.jpg",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Thai Iced Tea",
      desc: "Transport your taste buds to Thailand with our Thai Iced Tea. Bold tea flavor meets creamy sweetness in this chilled, refreshing beverage served over ice.",
      img: "/temporary/thai_ice_tea.jpg",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Strawberry Tea",
      desc: "Transport your taste buds to Thailand with our authentic Thai Iced Tea. Bold tea flavor meets creamy sweetness in this chilled, refreshing beverage.",
      img: "/temporary/strawberry_tea.jpg",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Black Sesame Tea",
      desc: "Indulge in our Black Sesame Tea, crafted from roasted black sesame seeds. Its rich, toasty taste and velvety texture offer a comforting, satisfying sip.",
      img: "/temporary/black_sesame_tea.jpg",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    }
  ];
  
  export const bobateas: Products = [
    {
        id: 1,
        title: "Brown Sugar Tea",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/temporary/brown_sugar_tea.jpg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 2,
        title: "Taro Tea",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/temporary/taro_tea.jpg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 3,
        title: "Thai Iced Tea",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/thai_ice_tea.jpg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 4,
        title: "Butterfly Tea",
        desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
        img: "/temporary/strawberry_butterfly_tea.jpg",
        price: 26.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 5,
        title: "Black Sesame Tea",
        desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
        img: "/temporary/black_sesame_tea.jpg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 6,
        title: "Strawberry Tea",
        desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
        img: "/temporary/strawberry_tea.jpg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      }
  ];

  export const icecreams: Products = [
    {
        id: 7,
        title: "Chocolate",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/icecreams/chocolate.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 8,
        title: "Raspberry",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/icecreams/raspberry.jpeg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 9,
        title: "Blueberry",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/icecreams/blueberry.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 10,
        title: "Vanilla",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/icecreams/vanillanut.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 11,
        title: "Toffee",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/icecreams/toffee.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 12,
        title: "Cotton Candy",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/icecreams/cottoncandy.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
  ];

  export const desserts: Products = [
    {
        id: 13,
        title: "Choco Chip",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/desserts/chocochip.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 14,
        title: "Strawberry Jam",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/desserts/berryjam.jpeg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 15,
        title: "Crushed Almond",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/desserts/almond.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 16,
        title: "Red Velvet",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/desserts/redvelvet.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 17,
        title: "Strawberry",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/desserts/strawberry.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 18,
        title: "Rocky Road",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/desserts/rockyroad.jpeg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      }
  ];
  
  export const brownSugarTea: Product = {
    id: 1,
    title: "Brown Sugar Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/brown_sugar_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const taroTea: Product = {
    id: 2,
    title: "Taro Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/taro_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const thaiIcedTea: Product = {
    id: 3,
    title: "Thai Iced Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/thai_ice_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const butterflyTea: Product = {
    id: 4,
    title: "Butterfly Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/strawberry_butterfly_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const blackSesameTea: Product = {
    id: 5,
    title: "Black Sesame Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/black_sesame_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const strawberryTea: Product = {
    id: 6,
    title: "Strawberry Tea",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/strawberry_tea.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const chocolate: Product = {
    id: 7,
    title: "Chocolate Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/chocolate.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const raspberry: Product = {
    id: 8,
    title: "Raspberry Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/raspberry.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const blueberry: Product = {
    id: 9,
    title: "Blueberry Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/blueberry.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const vanilla: Product = {
    id: 10,
    title: "Vanilla Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/vanilla.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const toffee: Product = {
    id: 11,
    title: "Toffee Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/toffee.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const cottonCandy: Product = {
    id: 12,
    title: "Cotton Candy Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/icecreams/cottoncandy.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const chocoChip: Product = {
    id: 13,
    title: "Choco Chip Cookie",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/chocochip.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const strawberryJam: Product = {
    id: 14,
    title: "Strawberry Jam Cookie",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/berryjam.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const crushedAlmond: Product = {
    id: 15,
    title: "Cotton Candy Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/almond.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const redVelvet: Product = {
    id: 16,
    title: "Cotton Candy Ice Cream",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/redvelvet.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const strawberry: Product = {
    id: 17,
    title: "Strawberry Cookie",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/strawberry.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }

  export const rockyRoad: Product = {
    id: 18,
    title: "Rocky Road Cookie",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/desserts/rockyroad.jpeg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ]
    
  }
  
  
type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "bobateas",
    title: "Boba Teas",
    desc: "Indulge in Boba Bliss: Handcrafted tapioca pearls, infused with premium teas and delightful flavors that dance on your taste buds.",
    img: "/temporary/brown_sugar_tea.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "icecreams",
    title: "Ice Creams",
    desc: "Scoop into Happiness: Velvety-smooth ice creams, made with the finest ingredients, offering a symphony of flavors that melt away stress.",
    img: "/temporary/ice_cream.jpeg",
    color: "white",
  },
  {
    id: 3,
    slug: "desserts",
    title: "FRESH COOKIES",
    desc: "Cookie Heaven: Irresistible, freshly baked delights with a perfect balance of chewiness and crunch. Each bite is a journey into sweet perfection.",
    img: "/temporary/cookies.jpeg",
    color: "white",
  },
];