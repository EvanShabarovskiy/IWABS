import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'

export const GET_DONORS = 'GET_DONORS';
export const CREATE_DONOR = 'CREATE_DONOR';
export const REMOVE_DONOR = 'REMOVE_DONOR';

export const getDonors = () => dispatch => {
  Get(
    api + 'donors', 
    ({ donors }) => dispatch({ type: GET_DONORS, payload: donors }), 
    error => console.log(error)
  );
} 

export const createDonor = donor => dispatch => {
  Post(
    api + 'donors', 
    donor, 
    ({ createdDonor }) => dispatch({ type: CREATE_DONOR, payload: createdDonor
    }), 
    error => console.log('error', error), 
    get('token')
  );
}

export const deleteDonor = id => dispatch => {
  Delete(
    `${api}donors/${id}`,
    () => dispatch({ type: REMOVE_DONOR, payload: id }),
    error => console.log(error),
    get('token')
  )
}