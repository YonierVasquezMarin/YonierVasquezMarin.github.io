/*  Created in 07/12/2020. You can use this freely.
    Author: Yonier Vasquez Marin (yoniervasquezmarin.github.io) */

    var mainElement = document.getElementById("main");

    for (var app_index = 0; app_index < apps.length; app_index++) {

        //GENERAR LOS ELEMENTOS       
        var div1Element = document.createElement("div");
        var div2Element = document.createElement("div");
        var img1Element = document.createElement("img");
        var div3Element = document.createElement("div");
        var h2Element = document.createElement("h2");
        var aElement = document.createElement("a");
        var h3Element = document.createElement("h3");
        var pElement = document.createElement("p");
        var img2Element = document.createElement("img");


        //AGREGAR LOS ATRIBUTOS A CADA ELEMENTO CREADO
        div1Element.className = "boxs apps-details";
        div2Element.className = "sectionA";
        img1Element.className = "app-icon";
        img1Element.src = apps[app_index].icon_URL;
        img1Element.alt = "app icon";
        div3Element.className = "sectionB";
        h2Element.className = "boxs app-name app-details-box";
        aElement.className = "app-link";
        aElement.href = apps[app_index].app_link;
        aElement.target = "_blank";
        aElement.innerText = apps[app_index].app_name;
        h3Element.className = "boxs app-version app-details-box";
        h3Element.innerText = ("versión " + apps[app_index].version
                                + " - ultima modificación"
                                + " " + apps[app_index].last_modification);
        pElement.className = "boxs app-description app-details-box";
        pElement.innerHTML = "<strong>Descripción: </strong>"
                                + apps[app_index].description + ".";
                    //Si es una PWA
                    if (apps[app_index].is_PWA) {
                        img2Element.className = "boxs pwa-icon";
                        img2Element.src = "assets/imgs/PWA-icon.png";
                        img2Element.alt = "PWA icon";
                    }
        

        //AÑADIR LOS ELEMENTOS A SUS RESPECTIVOS PADRES
        div2Element.appendChild(img1Element);
        div1Element.appendChild(div2Element);
        h2Element.appendChild(aElement);
        div3Element.appendChild(h2Element);
        div3Element.appendChild(h3Element);
        div3Element.appendChild(pElement);
                    //Si es una PWA
                    if (apps[app_index].is_PWA) {
                        div3Element.appendChild(img2Element);
                    }
        div1Element.appendChild(div3Element);
        mainElement.appendChild(div1Element);
    }