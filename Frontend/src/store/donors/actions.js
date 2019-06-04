import { Post } from "../../assets/services/request.service";
import { get } from 'js-cookie';
import { api } from '../../assets/constants/api'

export const GET_DONORS = 'GET_DONORS';
export const CREATE_DONOR = 'CREATE_DONOR';

export const createDonor = donor => dispatch => {
  Post(
    api + 'donors', 
    donor, 
    ({ createdDonor }) => dispatch({ type: CREATE_DONOR, payload: createdDonor }), 
    error => console.log('error', error), 
    get('token')
  );
}