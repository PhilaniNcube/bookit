import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import Head from "next/head";
import { IoBedOutline, IoWifiOutline, IoPawOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { Fragment } from "react";
import formatCurrency from "../../lib/formatCurrency";
import { getRoom } from "../../utils/rooms";

const Room = ({id}:{id:string}) => {

  const router = useRouter()

  const { data: room } = useQuery([`${id}`], async () => {
    const room = await getRoom(id);
    if(!room) {
      throw new Error(`Room ${id} not found`)
    }
    return room as IRoom;
  });

  if(!room) return null

  return (
    <Fragment>
      <Head>
        <title>
          {room.name} | {room.city}
        </title>
      </Head>
      <section className="max-w-7xl mx-auto px-4 my-6">
        <div className="overflow-hidden rounded-lg relative">
          <div className="grid grid-cols-3 gap-6">
            <Image
              src={room.images[0].url}
              width={2000}
              height={1500}
              className="w-full rounded-lg col-span-3 md:col-span-2 aspect-video object-cover"
              alt={room.name}
            />
            <div className="col-span-3 md:col-span-1 p-4">
              <h1 className="text-xl md:text-3xl text-slate-600 font-serif font-bold">
                {room.name}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-red-600 font-bold md:text-4xl mt-2">
                {formatCurrency(room.price)}/night
              </p>
              <span className="flex text-slate-500 items-center mt-3 space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <p className="text-lg font-bold">{room.category.type}</p>
              </span>
              <hr className="py-2 text-slate-500 mt-5" />
              <span className="flex space-x-2 items-center">
                <IoBedOutline className="h-12 w-12 text-slate-500" />{" "}
                <p className="text-slate-500 text-xl font-bold">
                  &times; {room.beds}
                </p>
              </span>
              <span className="flex space-x-2 items-center">
                <IoWifiOutline className="h-12 w-12 text-slate-500" />{" "}
                <p className="text-slate-500 text-xl font-bold">
                  {room.internet ? "Available" : "Not Available"}
                </p>
              </span>
              <span className="flex space-x-2 items-center">
                <IoPawOutline className="h-12 w-12 text-slate-500" />{" "}
                <p className="text-slate-500 text-xl font-bold">
                  {room.pets ? "Pets Allowed" : "No Pets Allowed"}
                </p>
              </span>
            </div>
          </div>
          <div className="mt-4 lg:w-2/3">
            <h3 className="text-2xl text-slate-600 font-bold">Description</h3>
            <p className=" text-sm md:text-base text-gray-500 font-medium font-serif">
              {room.description}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Room;


export async function getServerSideProps({ params:{id} }:{params:{id:string}}) {
  const queryClient = new QueryClient();

  console.log({id})

  await queryClient.prefetchQuery(["room"], () => getRoom(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id
    },
  };
}
