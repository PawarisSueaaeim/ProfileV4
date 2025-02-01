export const GET = () => {
    const response = {
        status: 200,
        client_message: "Success",
        data: [
            {
                id: "001",
                title: "Front-End Developer",
                date: "RAPID CAPITAL CO., LTD., 2023 Sep. - Currently",
                latest: true,
                description:
                    "รับหน้าที่พัฒนา Web application ส่วนของหน้าบ้าน ทำงานร่วมกับทีม backend เพื่อรับส่งข้อมูลแบบ RESTfulAPIs ทั้งหมด 4 โปรเจคโดยเริ่มจาก 0 ทั้งหมด, Tech Stack ที่ใช้ ReactJs, NextJs, HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Figma และ versions control โดย git และ Fork",
                image: "/pictures/rapid-logo.png",
            },
            {
                id: "002",
                title: "Front-End Engineer",
                date: "MUNGMEE ECOMMERCE CO., LTD., LTD.,  2022 Sep. - 2023 Sep.",
                latest: false,
                description:
                    "รับหน้าที่สร้าง Feature, Fix, Refactor Web application ส่วนของหน้าบ้าน ทำงานร่วมกับทีม backend เพื่อรับส่งข้อมูลแบบ RESTfulAPIs ทั้งหมด 2 โปรเจค Tech Stack ที่ใช้ ReactJs, NextJs, VueJs, NuxtJs, HTML, CSS, MUI, JavaScript, TypeScript, Jest, Cypress, Figma และ versions control โดย git และ Fork",
                image: "/pictures/mungmee_logo.jpeg",
            },
            {
                id: "003",
                title: "System Engineer",
                date: "SOMBOON ADVANCE TECHNOLOGY PUBLIC COMPANY LIMITED, 2021 Sep. - 2022 Sep.",
                latest: false,
                description:
                    "รับหน้าที่ Mornitor Firewall พูดคุยกับแผนกต่างๆหาแนวทางแก้ปัญหาใน Site งานระยองทั้งหมด 7 โรงงานผลิตสิ้นส่วนรถยนต์ จัดทำรายงานเรื่อง Risk management พร้อมทั้งแก้ปัญหา Tech Stack ที่ได้ใช้ Linux, Sangfor, Power BI",
                image: "/pictures/somboon-logo.png",
            }
        ],
    }
    return Response.json(response)
};