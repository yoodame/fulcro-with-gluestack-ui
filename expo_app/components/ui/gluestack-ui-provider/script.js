Object.defineProperty(exports,"__esModule",{value:true});exports.script=void 0;var script=exports.script=function script(mode){var documentElement=document.documentElement;function getSystemColorMode(){return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}try{var isSystem=mode==='system';var theme=isSystem?getSystemColorMode():mode;documentElement.classList.remove(theme==='light'?'dark':'light');documentElement.classList.add(theme);documentElement.style.colorScheme=theme;}catch(e){console.error(e);}};