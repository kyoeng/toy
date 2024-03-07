// #============== Header Data =================
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




// --- 컨텐츠 관련 데이터 ---
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
                goto: "/"
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








// #============== Footer Data =================
// --- footer 고정 출처 데이터 ---
export const staticSourceData = [
    '<a href="https://www.flaticon.com/kr/free-icons/-menu" title=" 아이콘">메뉴 아이콘 제작자: kendis lasman - Flaticon</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-close" title="닫기 버튼 아이콘">닫기 버튼 아이콘 제작자: inkubagotors - Flaticon</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-js" title="javascript 아이콘">자바 스크립트 아이콘 제작자: Freepik - Flaticon</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-python" title=" 아이콘">python 아이콘 제작자: Freepik - Flaticon</a>',
    '<a href="https://www.freepik.com/icon/unity_5969346">unity Icon by Freepik</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-web" title="브라우저 아이콘">브라우저 아이콘  제작자: vecgotorsmarket15 - Flaticon</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-pc" title="타워 pc 아이콘">타워 pc 아이콘  제작자: Smashicons - Flaticon</a>',
    '<a href="https://www.flaticon.com/kr/free-icons/-note" title="메모장 아이콘">메모장 아이콘  제작자: srip - Flaticon</a>',
]