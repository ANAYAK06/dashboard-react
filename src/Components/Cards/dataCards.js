import {FaRupeeSign} from 'react-icons/fa'


export const CardData = [
    {
        title:"Sales",
        color: {
                backGround: "linear-gradient(138deg, rgba(20,166,125,1) 28%, rgba(41,184,77,1) 46%, rgba(120,218,131,1) 99%)",
                 boxShadow : "0px 10px 20px 0px #e0c6f5",
                 
        },
        barValue: 70,
        value: " 25,790",
        png : FaRupeeSign,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100]
            },
        ],
    },
    {
        title:"Revenue",
        color: {
            backGround : "linear-gradient(138deg, rgba(20,166,120,1) 3%, rgba(194,221,10,1) 37%, rgba(218,228,80,1) 93%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 80,
        value: "25,790",
        png : FaRupeeSign,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100]
            },
        ],
    },
    {
        title:"Expenses",
        color: {
            backGround : "linear-gradient(114deg, rgba(85,218,177,1) 1%, rgba(221,126,10,1) 26%, rgba(250,46,46,1) 93%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 60,
        value: "25,790",
        png : FaRupeeSign,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100]
            },
        ],
    },
]