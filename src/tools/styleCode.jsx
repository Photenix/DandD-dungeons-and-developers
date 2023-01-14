import hljs from 'highlight.js'

import 'highlight.js/styles/panda-syntax-light.css'

import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const StyleCode = ({code}) => {
    const style = {
        textAlign: 'left', fontSize: "20px", lineHeight: '25px',
        backGround: 'black', background: 'rgba(57, 50, 50, 0.55)',
        borderRadius: '10px', padding: '12px'
    }
    let html = hljs.highlight(`${code}`, {language: 'javascript'}).value
    //console.log( html )
    return <pre style={ style }
        dangerouslySetInnerHTML={{ __html: `<code>${html}</code>` }}></pre>    
};

export default StyleCode;