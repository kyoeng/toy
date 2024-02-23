type menuDataType = {
    name: string,
    path: string
}



export const menuData: menuDataType[] = [
    {
        name: "JavaScript",
        path: "/js"
    },
    {
        name: "Java",
        path: "/java"
    },
    {
        name: "Python",
        path: "py"
    },
    {
        name: "C#",
        path: "cs"
    },
]





type subMenuType = {
    title: string,
    stack: string
}


interface subMenuDataType {
    "JavaScript": subMenuType,
    "Java": subMenuType,
    "Python": subMenuType,
    "C#": subMenuType
}


export const subMenuData: subMenuDataType = {
    "JavaScript": {
        title: "Self-Driving Cars",
        stack: ""
    },
    "Java": {
        title: "Self-Driving Cars",
        stack: ""
    },
    "Python": {
        title: "Self-Driving Cars",
        stack: ""
    },
    "C#": {
        title: "Self-Driving Cars",
        stack: ""
    },
}