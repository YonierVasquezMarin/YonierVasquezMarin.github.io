const CERTIFICATE_LIST = [
    {
        "title": "Introducción al desarrollo de apps para Android",
        "url": "https://drive.google.com/file/d/1sAmLUPnCau6JWOxFLjlSljCr6Sc976eZ/view?usp=sharing",
        "iconName": "android",
        "iconColor": "#0a7a13"
    },
    {
        "title": "Desarrollador web fullstack python",
        "url": "https://drive.google.com/file/d/1JeIzc7i_usnIb97V45wGzZYa3yyBPoUo/view?usp=sharing",
        "iconName": "code",
        "iconColor": "yellow"
    },
    {
        "title": "Estrategias para aprender inglés online",
        "url": "https://drive.google.com/file/d/10iXp3QnthBoo-sUO4VR7Uc1PYCbKOnzO/view?usp=sharing",
        "iconName": "book",
        "iconColor": "#7a00ff"
    },
    {
        "title": "Inglés para principiantes",
        "url": "https://drive.google.com/file/d/1GfHYkASREGTp8MLAFjzN5Iom2A37hLVG/view?usp=sharing",
        "iconName": "book",
        "iconColor": "#7a00ff"
    },
    {
        "title": "Lenguaje HTML",
        "url": "https://drive.google.com/file/d/16OveC8SLJ5APhcWpYmz8PHIyZsxuzAT5/view?usp=sharing",
        "iconName": "html",
        "iconColor": "#bd4d18"
    },
    {
        "title": "Habilidades blandas",
        "url": "https://drive.google.com/file/d/1dTo7_JXfo4wtQcOZyLOF-WgKgCdtxUMD/view?usp=sharing",
        "iconName": "volunteer_activism",
        "iconColor": "#d10345"
    }
]


for (let i = 0; i < CERTIFICATE_LIST.length; i++) {
    const CERTIFICATE_ITEM = CERTIFICATE_LIST[i];
    
    // new list's certificate item
    let newCertificateItem = document.createElement("div");
    newCertificateItem.classList.add("certificate-item");
    newCertificateItem.innerHTML = `
    <span class="certificate-icon material-symbols-rounded" style="color: ${CERTIFICATE_ITEM.iconColor};">${CERTIFICATE_ITEM.iconName}</span>
    <a class="certificate-link" href="${CERTIFICATE_ITEM.url}" target="_blank">${CERTIFICATE_ITEM.title}</a>
    `;

    // add new certificate item to list
    document.querySelector("#certificates-list").appendChild(newCertificateItem);
}