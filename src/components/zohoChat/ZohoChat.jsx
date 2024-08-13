import { useEffect } from 'react';

// Custom hook to load Zoho SalesIQ script
const useScript = (url, widgetCode) => {
    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.setAttribute("type", "text/javascript");

            const code = `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};
                var d=document;
                s=d.createElement("script");
                s.type="text/javascript";
                s.id="zsiqscript";
                s.defer=true;
                s.src="${url}";
                t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
                d.innerHTML = "<div id='zsiqwidget'></div>";
            `;
            
            script.appendChild(document.createTextNode(code));
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        };

        // Set timeout to load script after 4 seconds
        const timer = setTimeout(loadScript, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [url, widgetCode]);
};

function ZohoChat() {
    useScript('https://salesiq.zoho.in/widget', 'e5fa58e8e4cf6f88931280bc295c916af10b74e42138eae11a9c0a8cc10455ab18cc45b047203fefeedeae40b9306d03');
    
    return null;
};

export default ZohoChat;
