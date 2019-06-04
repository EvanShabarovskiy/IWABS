import React from "react";
import Doc from "./Doc";

const DocContainer = ({ doc, index }) => {
    let iconClass;
    let isEven;
    switch (doc.format) {
        case 'pdf':
            iconClass = 'far fa-file-pdf doc-icon';
            break;
        case 'docx':
            iconClass = 'far fa-file-word doc-icon';
            break;
        case 'txt':
            iconClass = 'far fa-file-alt doc-icon';
            break;
        case 'jpg' || 'png':
            iconClass = 'far fa-file-image doc-icon';
            break;
        default:
            iconClass = 'fas fa-poop doc-icon doc-icon';
            break;
    }

    doc['iconClass'] = iconClass;
    doc['isEven'] = index % 2 == 0;

    return <Doc {...doc} />
}

export default DocContainer