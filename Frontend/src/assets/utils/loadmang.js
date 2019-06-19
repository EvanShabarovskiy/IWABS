import Loadable from 'react-loadable';
import React from 'react'
import Loading from '../../components/_General/Loading';

export const loadmang = cb => Loadable({
  loader: () => cb(),
  loading: () => <Loading />,
});