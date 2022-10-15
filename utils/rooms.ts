import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { info } from 'console';
import { Database } from '../db_types';
import supabase from "../lib/supabase"

interface Room {
          id: string;
          created_at: string;
          name: string;
          category: {
             id: string;
             type: string;
             created_at: string;
          };
          address: string;
          capacity: number;
          description: string;
          beds: number;
          ratings: number;
          reviews: number;
          internet: boolean;
          breakfast: boolean;
          air_conditioned: boolean;
          pets: boolean;
          cleaning: boolean;
          images: [{
           url:string,
            public_id:string

          }]

        }



const getAllRooms = async() =>  {


let { data: rooms, error } = await supabase
  .from('rooms')
  .select('*, category(*) ')

  if(error) {
    throw new Error(error.details)
  }

  return rooms as IRoom[]

}


const getRoom = async (roomId: string) => {

  let { data: rooms, error } = await supabase
  .from('rooms')
  .select('*, category(*) ').eq('id', roomId).single()

    if(error) {
    throw new Error(error.details)
  }

  return rooms as Room

}


const createRoom = async ({name, price, description, address, capacity, beds, internet, breakfast, air_conditioned, pets, cleaning, category}:{
  name:string, price:number, description:string, address:string, capacity:number,beds:number, pets:boolean, cleaning:boolean, internet:boolean,breakfast:boolean,air_conditioned:boolean, category:string
}) => {



   const { data, error } = await supabase
  .from('rooms')
  .insert([
    { name, price, description, address, capacity, beds, internet, breakfast, air_conditioned, pets, cleaning, category },
  ]).single()

  return {data, error}

}

export {getAllRooms, getRoom, createRoom}
