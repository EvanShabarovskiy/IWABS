import { Get } from '../../assets/services/request.service';
import { api } from "../../assets/constants/api";

export const GET_DOCS = 'GET_DOCS';

export const getDocs = () => dispatch => {
  Get(
    api + 'documents', 
    ({ documents }) => dispatch({ type: GET_DOCS, payload: documents }), 
    error => console.log(error)
  );
  
}