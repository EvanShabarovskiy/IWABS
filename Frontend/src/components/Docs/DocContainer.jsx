import React from "react";
import Doc from "./Doc";

const DocContainer = ({ doc, index }) => {
    switch (doc.format) {
        case 'pdf':
            doc['iconClass'] = 'far fa-file-pdf doc-icon';
            break;
        case 'docx':
            doc['iconClass'] = 'far fa-file-word doc-icon';
            break;
        case 'txt':
            doc['iconClass'] = 'far fa-file-alt doc-icon';
            break;
        case 'jpg' || 'png':
            doc['iconClass'] = 'far fa-file-image doc-icon';
            break;
        default:
            doc['iconClass'] = 'fas fa-poop doc-icon';
            break;
    }
    doc['isEven'] = index % 2 == 0;
    return <Doc {...doc} />
}

export default DocContainer