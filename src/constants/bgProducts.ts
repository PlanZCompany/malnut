export type bgProductsType = {
  group: string
  products: singleBgProductType[]
  src: string
}

export type singleBgProductType = {
  name: string
  type: string
  size: string
}

export const bgProducts = [
  {
    src: '/images/gr-badem.png',
    group: 'ALMOND',
    products: [
      { name: '', type: 'NPX 1', size: '23/25' },
      { name: '', type: 'NPX 1', size: '25/27' },
      { name: '', type: 'NPX', size: '23/25' },
      { name: '', type: 'Blanched', size: '20/22' },
      { name: '', type: 'Blanched', size: '23/25' },
      { name: '', type: 'Blanched', size: '30/32' },
      { name: '', type: 'Poweder', size: '00.00' },
      { name: '', type: 'Sliced', size: 'BIG' },
      { name: '', type: 'Spanish', size: '18/20' },
      { name: '', type: 'Spanish', size: '23/25' },
      { name: '', type: 'Spanish', size: '25/27' },
    ],
  },
  {
    src: '/images/cashews.webp',
    group: 'CASHEWS',
    products: [
      {
        name: '',
        type: 'WW',
        size: 320,
      },
      {
        name: '',
        type: 'WW',
        size: 240,
      },
      {
        name: '',
        type: 'WW',
        size: 180,
      },
      {
        name: '',
        type: 'WW',
        size: 320,
      },
      {
        name: '',
        type: 'WW',
        size: 240,
      },
      {
        name: '',
        type: 'WW',
        size: 320,
      },
      {
        name: '',
        type: 'LIGHT',
        size: 'SPLITS',
      },
    ],
  },
  {
    src: '/images/dried-fruits.webp',
    group: 'DRIED FRUITS',
    products: [
      {
        name: 'Cranberry',
        type: 'soft&moice',
        size: 'Slices',
      },
      {
        name: 'Cranberry',
        type: 'PREMIUM',
        size: 'Whole',
      },
      {
        name: 'Blueberry',
        type: 'PREMIUM',
        size: 'whole',
      },
      {
        name: 'Black Currant',
        type: 'EX 1',
        size: 'whole',
      },
      {
        name: 'Dates mejool ',
        type: 'MEJOOL',
        size: 'М',
      },
      {
        name: 'Dates mejool ',
        type: 'MEJOOL',
        size: 'L',
      },
      {
        name: 'Dates mejool ',
        type: 'MEJOOL',
        size: 'JUMBO',
      },
      {
        name: 'Dates ',
        type: 'SYROP',
        size: 'NO PIT',
      },
      {
        name: 'Apricot',
        type: 'DRIED',
        size: 1,
      },
      {
        name: 'Apricot',
        type: 'DRIED',
        size: 3,
      },
      {
        name: 'Apricot',
        type: 'NATURAL',
        size: 1,
      },
      {
        name: 'FIG',
        type: 'DRIED',
        size: 'BIG',
      },
      {
        name: 'FIG',
        type: 'DRIED',
        size: 'SMALL',
      },
      {
        name: 'MANGO',
        type: 'SUGARED',
        size: 'SLICE',
      },
      {
        name: 'PINAPLE',
        type: 'SUGARED',
        size: 'SLICE',
      },
      {
        name: 'PINAPLE',
        type: 'SUGARED',
        size: 'WHOLE',
      },
      {
        name: 'PAPAYA',
        type: 'SUGARED',
        size: 'STICKS',
      },
      {
        name: 'KIWI',
        type: 'SUGARED',
        size: 'WHOLE',
      },
      {
        name: 'POMELO',
        type: 'SUGARED',
        size: 'SLICE',
      },
      {
        name: 'MELON',
        type: 'SUGARED',
        size: 'STICKS',
      },
      {
        name: 'JINJER',
        type: 'SUGARED',
        size: 'SLICE CR',
      },
      {
        name: 'FRUIT MIX',
        type: 'SUGARED',
        size: 'WHOLES',
      },
      {
        name: 'CUMCUAT',
        type: 'SUGARED',
        size: 'WHOLE',
      },
      {
        name: 'GOJI BERRY',
        type: 'DRIED',
        size: 550,
      },
      {
        name: 'GOJI BERRY',
        type: 'DRIED',
        size: 350,
      },
    ],
  },
  {
    src: '/images/gr-leshink-blanshiran.jpg',
    group: 'HAZELNUTS',
    products: [
      {
        name: '',
        type: 'RAW',
        size: '14/16мм',
      },
      {
        name: '',
        type: 'RAW',
        size: '13/15мм',
      },
      {
        name: '',
        type: 'RAW',
        size: '11/13мм',
      },
      {
        name: '',
        type: 'Blanched',
        size: '14/16мм',
      },
      {
        name: '',
        type: 'Blanched',
        size: '13/15мм',
      },
      {
        name: '',
        type: 'Blanched',
        size: '11/13мм',
      },
      {
        name: '',
        type: 'Pieces blanch',
        size: '2/4мм',
      },
      {
        name: '',
        type: 'Powder',
        size: '00.00',
      },
      {
        name: '',
        type: 'Inshell',
        size: '20+мм',
      },
    ],
  },
  {
    src: '/images/others.webp',
    group: 'OTHER',
    products: [
      {
        name: 'Brasil Nuts',
        type: 'RAW',
        size: 'Medium',
      },
      {
        name: 'Brasil Nuts',
        type: 'RAW',
        size: 'Large',
      },
      {
        name: 'Pistachio ',
        type: 'RAW',
        size: 'Inshell',
      },
      {
        name: 'Wallnuts',
        type: 'RAW',
        size: '1\\2',
      },
      {
        name: 'Wallnuts',
        type: 'RAW',
        size: '1\\4',
      },
      {
        name: 'Wallnuts',
        type: 'RAW',
        size: '1\\4',
      },
      {
        name: 'Wallnuts',
        type: 'RAW',
        size: '20% LHP',
      },
      {
        name: 'Wallnuts',
        type: 'RAW',
        size: '1\\2',
      },
      {
        name: 'Pecan',
        type: 'RAW',
        size: 'Mamooth',
      },
      {
        name: 'Macadamia',
        type: 'RAW',
        size: 'Style 0',
      },
      {
        name: 'Macadamia',
        type: 'RAW',
        size: 'Style 1',
      },
      {
        name: 'Pine nuts',
        type: 'RAW',
        size: '950/1200',
      },
      {
        name: 'Pistachio kernels',
        type: 'RAW',
        size: 'whole',
      },
    ],
  },
  {
    src: '/images/roasted.webp',
    group: 'ROASTED',
    products: [
      {
        name: 'CASHEW',
        type: 'SALTED',
        size: 450,
      },
      {
        name: 'CASHEW A240',
        type: 'SALTED',
        size: 240,
      },
      {
        name: 'ALMOND',
        type: 'SALTED',
        size: '20/22',
      },
      {
        name: 'PEANUT',
        type: 'SALTED',
        size: '50/60',
      },
      {
        name: 'ALMOND',
        type: 'NO SALT',
        size: '25/27',
      },
    ],
  },
  {
    src: '/images/SEEDS-AND-SUPERFOODS.jfif',
    group: 'SEEDS AND SUPERFOODS',
    products: [
      {
        name: 'PUMPKIN SEED',
        type: 'HULLED',
        size: 'GWS AA',
      },
      {
        name: 'SUNFLOWER',
        type: 'HULLED',
        size: 'confectionery',
      },
    ],
  },
]
