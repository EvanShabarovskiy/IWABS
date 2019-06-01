import React from 'react';
import DocList from './DocList';

const Docs = ({ docs }) => (
  <section className="section page docs">
    <h1 className="section-title">документи</h1>
    <DocList docs={docs} />
  </section>
);

export default Docs;