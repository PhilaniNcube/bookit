export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      rooms: {
        Row: {
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

          }];
          city: string;
          postal_code: string;

        };
        Insert: {
          id?: string;
          created_at?: string;
          name?: string;
          category?: string;
          address?: string;
          capacity?: number;
          description?: string;
          beds?: number;
          ratings?: number;
          reviews?: number;
          internet?: boolean;
          breakfast?: boolean;
          air_conditioned?: boolean;
          pets?: boolean;
          cleaning?: boolean;
          images?: [{
            url:string,
            public_id:string

          }];
          city?: string;
          postal_code?: string;

        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          category?: string;
          address?: string;
          capacity?: number;
          description?: string;
          beds?: number;
          ratings?: number;
          reviews?: number;
          internet?: boolean;
          breakfast?: boolean;
          air_conditioned?: boolean;
          pets?: boolean;
          cleaning?: boolean;
          images?: [{
            url:string,
            public_id:string

          }];
          city?: string;
          postal_code?: string;

        };
      };
      profiles: {
        Row: {
          id: string;
          created_at: string;
          first_name: string;
          last_name: string;
          email: string;
        };
        Insert: {
           id?: string;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
        };
        Update: {
           id?: string;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
        };
      };
      reviews:{
        Row: {
          id: string;
          profile_id: {
            id: string;
            first_name: string;
            last_name: string;
          };
          rating: number;
          room_id: string;
          comment: string;
        };
        Insert: {
          id?: string;
          profile_id?:string;
          rating?:number;
          roomd_id?:string;
          comment?:string;
        };
         Update: {
           id?: string;
          profile_id?:string;
          rating?:number;
          roomd_id?:string;
          comment?:string;
         }
      }
      category: {
        Row: {
          id: string;
          type: string;
          created_at: string;

        };
        Insert: {
           id?: string;
          type?: string;
          created_at?: string;
        };
        Update: {
           id?: string;
          type?: string;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {
      derive_label_sort_from_label: {
        Args: { label: string };
        Returns: string;
      };
    };
    Enums: {

    };
  };
}
