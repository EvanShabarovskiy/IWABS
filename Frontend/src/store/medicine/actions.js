import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'

export const GET_MEDICINE = 'GET_MEDICINE';
export const CREATE_MEDICINE_ITEM = 'GET_MEDICINE_ITEM';
export const REMOVE_MEDICINE_ITEM = 'REMOVE_MEDICINE_ITEM';

export const getMedicine = () => dispatch => {
  Get(
    api + 'medicine', 
    ({ medicine }) => dispatch({ type: GET_MEDICINE, payload: medicine }), 
    error => console.log(error)
  );
} 

export const addMedicineItem = item => dispatch => {
  Post(
    api + 'medicine', 
    item, 
    ({ createdItem }) => dispatch({ type: CREATE_MEDICINE_ITEM, payload: createdItem
    }), 
    error => console.log('error', error), 
    get('token')
  );
}

export const deleteMedicineItem = id => dispatch => {
  Delete(
    `${api}medicine/${id}`,
    () => dispatch({ type: REMOVE_MEDICINE_ITEM, payload: id }),
    error => console.log(error),
    get('token')
  )
}