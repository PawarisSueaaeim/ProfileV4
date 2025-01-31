export const GET = async () => {
    let response = {
        status: "OK",
        client_message: "Success",
        data: [
            {
                id: "001",
                title: "Classroom Attendance Management System",
                date: "Project, 2020 - 2st Semester",
                latest: false,
                description:
                    "โปรแกรมสำหรับเช็คชื่อเข้าห้องเรียนที่มีไว้ให้ อาจารย์สามารถดูและออกสรุปรายงาน ข้อมูลการเข้าห้องเรียนและตำแหน่งของนักเรียนได้ โดยการ matching ระหว่าง wifi ในห้องและมือถือของนักเรียนที่ติดตั้งแอพของเราและเข้ามากด checkin ผ่าน mobile app ของเรา",
                image: "/pictures/cmu-logo-en.png",
            },
            {
                id: "002",
                title: "Network Design Faculty Architectural",
                date: "Computer Networks, 2019 - 1st Semester",
                latest: false,
                description:
                    "สำรวจคณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ และออกแบบการติดตั้ง Network ตั้งแต่ต้นจนจบแจกแจงงบประมาณทั้งหมด วิธีการติดตั้งและ load เพียงพอต่อนักศึกษาหรือไม่",
                image: "/pictures/cmu-logo-en.png",
            },
            {
                id: "003",
                title: "Traffic Jam Game",
                date: "Logic, 2018 - 2st Semester",
                latest: false,
                description:
                    "ตู้เกมที่ player1 จะต้องกดเบรคให้ทันเมื่อ player2 กดปุ่มเปลี่ยนเป็นไฟแดง แบบ Hardware โดยใช้ logic gate ทั้งหมด",
                image: "/pictures/cmu-logo-en.png",
            },
            {
                id: "004",
                title: "Game WereWolf Online",
                date: "Opject-Orianted Programming, 2018 - 1st Semester",
                latest: false,
                description:
                    "board เกม Werewolf ในรูปแบบ online พัฒนาโดย C# ลักษณะงานคือการแก้บัคในโค้ดที่อาจารย์มีให้อยู่แล้ว",
                image: "/pictures/cmu-logo-en.png",
            },
            {
                id: "005",
                title: "CMU Chatbot",
                date: "Computer Programming, 2017 - 2st Semester",
                latest: false,
                description:
                    "Wab Application ที่ตอบคำถามเกี่ยวกับคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่อัตโนมัติ",
                image: "/pictures/cmu-logo-en.png",
            },
            {
                id: "006",
                title: "เครื่องกดน้ำ อัตโนมัติ",
                date: "Basic Computer Engineering, 2017 - 1st Semester",
                latest: false,
                description:
                    "สร้างเครื่องกดน้ำที่เมื่อนำแก้วไปวาง กดเลือกน้ำเครื่องจะคำนวนความสูงของแก้วน้ำ และเติมน้ำที่เลือกให้พอดี โดยใช้ python",
                image: "/pictures/cmu-logo-en.png",
            },
        ],
    };

    return Response.json(response);
};
