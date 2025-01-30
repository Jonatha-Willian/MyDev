import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodigoHigHlight(){


    
  return (
        <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
        </SyntaxHighlighter>
    );
};

export default CodigoHigHlight