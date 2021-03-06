import React from 'react';
import cx from 'classnames';

import PostContainer from './PostContainer';
import NewPostContainer from '../_Forms/NewPostContainer';

const News = ({ news, signedIn }) =>
  <section className="news page section">
    <h1 className="section-title">новини</h1>
    { signedIn && <NewPostContainer /> }
    <div className={cx('news-list', signedIn && 'controlled')}>
      { news.map(post => <PostContainer key={post.id} post={post} />) }
    </div>
  </section>

export default News;