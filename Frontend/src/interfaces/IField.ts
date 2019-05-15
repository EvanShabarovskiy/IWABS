import { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IField {
  name: string;
  value: string;
  placeholder: string;
  change: any;
}
