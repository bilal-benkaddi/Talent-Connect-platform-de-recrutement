import React, { useEffect } from 'react';

const Translate = () => {
    useEffect(() => {
        const addScript = document.createElement("script");
        const style = document.createElement("style");
        
        style.innerHTML = `
            iframe.skiptranslate {
                visibility: hidden !important;
                display: none !important;
                z-index: -100 !important;
                margin: 0px !important;
                padding: 0px !important;
                height: 0% !important;
                width: 0% !important;
                position: absolute !important;
                top: -1000px !important;
                left: -9999px !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            #goog-gt-tt { display: none !important; }
            .font-sans{ top: 0px !important; }
            .VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none !important; }
            .goog-logo-link {
                display: none !important;
            }
            .goog-te-gadget {
                color: transparent !important;
            }
            .goog-te-gadget .goog-te-combo {
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                color: black !important;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                border-radius: 5px;
                border-color: #ccc;
                color: #212529;
            }
        `;

        document.head.appendChild(style);
        
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        addScript.async = true;
        document.body.appendChild(addScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "fr", autoDisplay: true },
                "google_translate_element"
            );
        };

        const skipTranslateElement = document.querySelector("iframe.skiptranslate");
        if (skipTranslateElement) {
            skipTranslateElement.remove();
        }

    }, []);

    return <div id="google_translate_element"></div>;
};

export default Translate;
