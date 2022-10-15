import Image from "next/future/image";
import Link from "next/link";
import formatCurrency from "../../lib/formatCurrency";

const Rooms = ({rooms}:{rooms:IRoom[]}) => {
  return (
    <section className="my-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-slate-600 font-medium text-2xl md:text-3xl">
          Choose A Room
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="w-full group rounded-lg">
              <Image
                src={room.images[0].url}
                alt={room.name}
                width={600}
                height={400}
                className="rounded-lg h-[25vh] group-hover:opacity-75 w-full object-cover"
              />
              <Link href={`/rooms/${room.id}`}>
                <div className="py-4 cursor-pointer flex flex-col justify-between h-[200px]">
                  <h3 className="text-slate-500 font-bold text-base pr-6">
                    {room.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl text-slate-700 font-bold font-serif">
                      {formatCurrency(room.price)}/night
                    </p>
                    <p className="text-lg mt-1 text-slate-500 font-medium">
                      {room.city}
                    </p>
                  </div>

                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg group-hover:bg-red-500">
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rooms;
