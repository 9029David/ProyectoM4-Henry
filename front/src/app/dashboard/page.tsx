"use client";

import { OrderSkeleton } from "./OrderSkeleton";
import Link from "next/link";
import { Route } from "@/app/shared/constants/routes";
import { CardOrder } from "./CardOrder.component";
import { useOrder } from "./Dashboard.context";
import { CardUser } from "./Card.component";

export default function Dashboard() {
  const { orders, isLoading } = useOrder()

  return (
    <div className="bg-[#ECE7E7] mx-auto p-4 h-[100%] text-gray-900">
      <div className="mx-auto w-full md:w-4/5 lg:w-3/5">
        <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-2">User Profile</h2>
          <CardUser />
        </div>
        <hr className="my-4" />
        <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <OrderSkeleton key={index}/>
              ))}
            </div>
          ) : orders.length > 0 ? (
            <div className="transition-opacity duration-500">
              { orders.map(order => (<CardOrder key={order.id} order={order}/> )) }
            </div>
          ) : (
            <div>
              You don&apos;t have any orders yet.
              <Link href={Route.HOME} className="text-blue-500 underline">
                Click here to shop
              </Link>
              .
            </div>
          )}
        </div>
      </div>
    </div>
  );
}