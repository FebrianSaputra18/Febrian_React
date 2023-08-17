import productImg1 from "../Images/dfruits/imgGomu.jpeg";
import productImg2 from "../Images/dfruits/imgBaranomi.jpg";
import productImg3 from "../Images/dfruits/imgGorunomi.jpg";
import productImg4 from "../Images/dfruits/imgHana.jpg";
import productImg5 from "../Images/dfruits/imgHitonomi.jpg";
import productImg6 from "../Images/dfruits/imgMeronomi.jpg";
import productImg7 from "../Images/dfruits/imgMochinomi.jpg";
import productImg8 from "../Images/dfruits/imgMokunomi.jpg";

// const products = {'1': {id: '1', name: 'buah'}, '2': {id: '2', name: 'buah2'}}

// products[`${id}`] call

const products = [
    {
        id:'1',
        productName : 'Bara Bara No Mi',
        imgUrl: productImg2,
        kategori: 'buah',
        harga: 100000,
        spesifikasi: 'Op parah badan bisa pisah nih badut',
        reviews:[
            {
                owner: 'Buggy',
                Bounty:'5 Miliar'
            }

        ]
    },
    {
        id:'2',
        productName : 'Gomu Gomu No Mi',
        imgUrl: productImg1,
        kategori: 'buah',
        harga: 1000000000,
        spesifikasi: 'Merubah Bentuk menjadi karet.',
        reviews:[
            {
                owner: 'Monkey D Luffy',
                Bounty:'5 Miliar'
            }

        ]
    },
    {
        id:'3',
        productName : 'Goru Goru No Mi',
        imgUrl: productImg3,
        kategori: 'buah',
        harga: 10000,
        spesifikasi: 'Merubah Bentuk menjadi Lilin',
        reviews:[
            {
                owner: 'Mr.3',
                Bounty:'100'
            }

        ]
    },
    {
        id:'4',
        productName : 'Hito Hito No Mi',
        imgUrl: productImg4,
        kategori: 'buah',
        harga: 1000000,
        spesifikasi: 'Time traveler',
        reviews:[
            {
                owner: 'Mito',
                Bounty:'10000'
            }

        ]
    },
    {
        id:'5',
        productName : 'Hana Hana No Mi',
        imgUrl: productImg5,
        kategori: 'buah',
        harga: 40000,
        spesifikasi: 'Mengeluarkan asap',
        reviews:[
            {
                owner: 'Smoker',
                Bounty:'10000'
            }

        ]
    },
    {
        id:'6',
        productName : 'Mero Mero No Mi',
        imgUrl: productImg6,
        kategori: 'buah',
        harga: 6000000,
        spesifikasi: 'Merubah orang menjadi batu',
        reviews:[
            {
                owner: 'Boa Hancoock',
                Bounty:'50000'
            }

        ]
    },
    {
        id:'7',
        productName : 'Mochi Mochi No Mi',
        imgUrl: productImg7,
        kategori: 'buah',
        harga: 9000000,
        spesifikasi: 'Merubah bentuk menjadi Mochi untuk menyerang',
        reviews:[
            {
                owner: 'Katakuri',
                Bounty:'1500000'
            }

        ]
    },
    {
        id:'8',
        productName : 'Moku Moku No Mi',
        imgUrl: productImg8,
        kategori: 'buah',
        harga: 8000000,
        spesifikasi: 'Merubah Bentuk Menjadi Naga',
        reviews:[
            {
                owner: 'Kaido',
                Bounty:'150000'
            }

        ]
    },
]

export default products;