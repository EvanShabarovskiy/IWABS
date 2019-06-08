import React from 'react';
import cx from 'classnames';

import DocContainer from './DocContainer';
import NewDocContainer from '../_Forms/NewDocContainer';

const Docs = ({ docs, signedIn }) =>
  <section className="section page docs">
    <h1 className="section-title">документи</h1>
    { signedIn && <NewDocContainer /> }
    <div className={cx('docs-container', signedIn && 'controlled')} >
      { docs.map((doc, i) => <DocContainer key={i} doc={doc} index={i} />) }
    </div>
  </section>

export default Docs;