import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'

export const GET_MEDICINE = 'GET_MEDICINE';
export const CREATE_MEDICINE = 'CREATE_MEDICINE';
export const REMOVE_MEDICINE = 'REMOVE_MEDICINE';

export const getMedicine = () => dispatch => {
  Get(
    api + 'medicine', 
    ({ medicine }) => dispatch({ type: GET_MEDICINE, payload: medicine }), 
    error => console.log(error)
  );
} 

export const createMedicine = item => dispatch => {
  Post(
    api + 'medicine', 
    item, 
    ({ createdMedicine }) => dispatch({ type: CREATE_MEDICINE, payload: createdMedicine }), 
    error => console.log('error', error), 
    get('token')
  );
}

export const removeMedicine = id => dispatch => {
  Delete(
    `${api}medicine/${id}`,
    () => dispatch({ type: REMOVE_MEDICINE, payload: id }),
    error => console.log(error),
    get('token')
  )
}