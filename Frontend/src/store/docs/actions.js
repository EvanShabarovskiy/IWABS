import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from "../../assets/constants/api";
import { get } from 'js-cookie';
import { togglePageLoading } from '../actions';

export const GET_DOCS = 'GET_DOCS';
export const CREATE_DOC = 'CREATE_DOC';
export const REMOVE_DOC = 'REMOVE_DOC';


export const getDocs = () => dispatch => {
  dispatch(togglePageLoading(true));
  Get(
    api + 'documents', 
    ({ documents }) => {
      dispatch({ type: GET_DOCS, payload: documents });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => dispatch(togglePageLoading(false))
  );
}
export const createDoc = doc => dispatch => {
  dispatch(togglePageLoading(true));
  Post(
    api + 'documents', 
    doc, 
    ({ createdDoc }) => {
      dispatch({ type: CREATE_DOC, payload: createdDoc });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => dispatch(togglePageLoading(false)), 
    get('token')
  );
}

export const removeDoc = id => dispatch => {
  dispatch(togglePageLoading(true));
  Delete(
    `${api}documents/${id}`,
    () => {
      dispatch({ type: REMOVE_DOC, payload: id });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    },
    error => dispatch(togglePageLoading(false)),
    get('token')
  )
}