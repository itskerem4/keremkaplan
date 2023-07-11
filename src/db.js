import project1 from './img/project1.png'
import project2 from './img/project2.png'
import project3 from './img/project3.png'
import project4 from './img/project4.png'
import project5 from './img/project5.png'
import resume from './files/resume.pdf'
import personal from './img/user.jpeg'
const data =
{
    navbarhead:
    [
        {
            id:1,
            title:'Kerem Kaplan',
            link:'./home'
        },
    ],
    navbar:
    [
       
        {
            id:1,
            title:'Home',
            link:'./home'
        },
        {
            id:2,
            title:'Project',
            link:'./project'
        },
        {
            id:3,
            title:'About',
            link:'./about'
        },
        {
            id:4,
            title:'Contant',
            link:'./contant'
        }
] ,
    home:
    [
        {
            image:{
                id:1,
                img:personal
            },
            icon:{
                github:{
                    link:'',
                    icon:'fa fa-github'
                },
                linkedin:{
                    link:'',
                    icon:'fa fa-linkedin'
                },
                twitter:{
                    link:'',
                    icon:'fa fa-twitter'
                },
                instagram:{
                    link:'',
                    icon:'fa fa-instagram'
                },
            }
        }
    ],
    project:
    [
    {
        id:1, 
        image:project1,
        title:'React Weather App', 
        body:'React Weather App',
        link:'https://github.com/itskerem4/React-Weather-App'
    },
    {
        id:2, 
        image:project2,
        title:'React Qr Generator And Scanner', 
        body:'React Qr Generator And Scanner',
        link:'https://github.com/itskerem4/React-QrGenerator-Scanner'
    },
    {
        id:3, 
        image:project3,
        title:'React Shopping App', 
        body:'React Shopping App',
        link:'https://github.com/itskerem4/React-Shopping-App'
    },
    {
        id:4, 
        image:project4,
        title:'Php Book Libary App', 
        body:'Php Book Libary App',
        link:'https://github.com/itskerem4/React-Shopping-App'
    },
    {
        id:5, 
        image:project5,
        title:'Bootstrap 5 Portfolio Template 1', 
        body:'Bootstrap 5 Portfolio Template',
        link:'https://github.com/itskerem4/Bootstrap-Portfolio-Site'
    },
    {
        id:5, 
        image:project5,
        title:'Bootstrap 5 Portfolio Template 2', 
        body:'Bootstrap 5 Portfolio Template',
        link:'https://github.com/itskerem4/Bootstrap-Portfolio-Site-2'
    },
    {
        id:5, 
        image:project5,
        title:'Bootstrap 5 Portfolio Template 3', 
        body:'Bootstrap 5 Portfolio Template',
        link:'https://github.com/itskerem4/Bootstrap-Portfolio-Site-3'
    },
    ],
    about:
    [
        {id:'about-me',
        body:"Hello, I am Kerem Kaplan, a 21-year-old young entrepreneur pursuing software. I graduated from Harran University Computer Programming. Front-end developer and ui ux designs are my field of interest. You can find more on my resume.",
        files:resume,
        img:personal
    }
    ]

};

export default data;