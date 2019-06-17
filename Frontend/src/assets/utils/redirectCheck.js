import React from 'react';
import { Redirect } from 'react-router-dom';

export const redirectCheck = (condition, { Component, from, to }) => {
   if(condition) {
      return <Component />
   }
   return <Redirect from={from} to={to} />
}