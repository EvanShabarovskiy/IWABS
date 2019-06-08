import React from "react";
import { connect } from 'react-redux'

import Doc from "./Doc";
import { documents } from "../../assets/constants/api";
import { removeDoc } from '../../store/docs/actions';

const DocContainer = ({ doc, index, signedIn, removeDoc }) => {
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
    const onRemove = () => confirm('Ви дійсно хочете видалити цей документ?') && removeDoc(doc.id);
    const isEven = index % 2 == 0;
    doc['href'] = documents + doc.documentName;
    return <Doc {...doc} isEven={isEven} showControls={signedIn} onRemove={onRemove} />
}

export default connect(
    ({ general: { signedIn }}) => ({ signedIn }),
    { removeDoc }
  )(DocContainer);