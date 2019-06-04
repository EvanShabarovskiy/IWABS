import { Get, Post } from '../../assets/services/request.service';
import { api } from "../../assets/constants/api";
import { get } from 'js-cookie';

export const GET_DOCS = 'GET_DOCS';
export const CREATE_DOC = 'CREATE_DOC'

export const getDocs = () => dispatch => {
  Get(
    api + 'documents', 
    ({ documents }) => dispatch({ type: GET_DOCS, payload: documents }), 
    error => console.log(error)
  );
}

export const createDoc = doc => dispatch => {
  Post(
    api + 'documents', 
    doc, 
    ({ createdDocument }) => dispatch({ type: CREATE_DOC, payload: createdDocument }), 
    error => console.log('error', error), 
    get('token')
  );
}