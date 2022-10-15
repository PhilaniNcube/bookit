interface IRoom {
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
          price: number;
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
            public_id:string;
          }];
          city: string;
          postal_code: string;
}
