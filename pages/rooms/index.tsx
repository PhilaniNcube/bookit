import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { Fragment } from "react";
import Rooms from "../../components/Rooms/Rooms";
import { getAllRooms } from "../../utils/rooms";

const index = () => {

  const {
    data: rooms,
    isLoading,
    isSuccess,
  } = useQuery(["rooms"], getAllRooms);

  return (
    <Fragment>
      <Head>
        <title>Rooms</title>
      </Head>

      {rooms && <Rooms rooms={rooms} />}
    </Fragment>
  );
};
export default index;


export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["rooms"], () => getAllRooms());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
