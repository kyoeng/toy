// --- 카테고리 관련 데이터 ---
export const categoryData: {name: string, idx: number}[] = [
    {
        name: "JavaScript",
        idx: 0
    },
    {
        name: "Python",
        idx: 1
    },
    {
        name: "Unity",
        idx: 2
    }
]




// --- 컨텐츠 데이터 ---
import lightModeWebImg from "$lib/assets/images/header/lightMode-web.png";
import lightModePcImg from "$lib/assets/images/header/lightMode-pc.png";
import lightModeNoteImg from "$lib/assets/images/header/lightMode-note.png";
import darkModeWebImg from "$lib/assets/images/header/darkMode-web.png";
import darkModePcImg from "$lib/assets/images/header/darkMode-pc.png";
import darkModeNoteImg from "$lib/assets/images/header/darkMode-note.png";


type contentsType = {
    subject: string,
    lightModeImage: string,
    darkModeImage: string,
    goto: string
}


type contentsDataType = {
    idx: number
    data: contentsType[]
}


export const contentsData: contentsDataType[] = [
    {
        idx: 0,
        data: [
            {
                subject: "Web",
                lightModeImage: lightModeWebImg,
                darkModeImage: darkModeWebImg,
                goto: "/js-web"
            },
            {
                subject: "Desktop",
                lightModeImage: lightModePcImg,
                darkModeImage: darkModePcImg,
                goto: "/"
            },
            {
                subject: "Note",
                lightModeImage: lightModeNoteImg,
                darkModeImage: darkModeNoteImg,
                goto: "/"
            },
        ]
    },
    {
        idx: 1,
        data: [
            {
                subject: "Py Test1",
                lightModeImage: "",
                darkModeImage: "",
                goto: "/"
            },
            {
                subject: "Py Test2",
                lightModeImage: "",
                darkModeImage: "",
                goto: "/"
            },
            {
                subject: "Note",
                lightModeImage: lightModeNoteImg,
                darkModeImage: darkModeNoteImg,
                goto: "/"
            },
        ]
    },
    {
        idx: 2,
        data: [
            {
                subject: "Uni Test1",
                lightModeImage: "",
                darkModeImage: "",
                goto: "/"
            },
            {
                subject: "Uni test2",
                lightModeImage: "",
                darkModeImage: "",
                goto: "/"
            },
            {
                subject: "Note",
                lightModeImage: lightModeNoteImg,
                darkModeImage: darkModeNoteImg,
                goto: "/"
            },
        ]
    },
]




// --- 컨테츠별 아이콘 관련 데이터 ---
import jsIcon from "$lib/assets/images/header/js-icon.png";
import pyIcon from "$lib/assets/images/header/python-icon.png";
import uniIcon from "$lib/assets/images/header/unity-icon.png";


export const contentsIconData = [
    {
        idx: 0,
        image: jsIcon,
        title: "JavaScript"
    },
    {
        idx: 1,
        image: pyIcon,
        title: "Python"
    },
    {
        idx: 2,
        image: uniIcon,
        title: "Unity"
    },
]