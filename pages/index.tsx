import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getAllRooms } from '../utils/rooms'
import {
  dehydrate,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Rooms from '../components/Rooms/Rooms';

const Home: NextPage = () => {

const {data:rooms, isLoading, isSuccess} = useQuery(['rooms'], getAllRooms)

console.log({rooms})

  return (
    <Fragment>
      <Head>
        <title>Book IT</title>
      </Head>
      <Hero />
      {rooms && <Rooms rooms={rooms} />}
    </Fragment>
  );
}

export default Home


export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["rooms"], () => getAllRooms());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
