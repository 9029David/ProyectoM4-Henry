"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../(auth)/shared/context/Auth.context";
import axios from "axios";
import Swal from "sweetalert2";
import { NEXT_PUBLIC_API_URL } from "../shared/helpers/getEnvs";
import { OrderSkeleton } from "./OrderSkeleton";
import Link from "next/link";
import { IOrder } from "@/app/shared/interfaces/user/IOrder";
import { useOrder } from "./Dashboard.context";
import { Route } from "@/routes/routes";


export function generateVisualID(id: number): string {
  const randomPart = Math.random().toString(36).substr(2, 6).toUpperCase(); // Cadena aleatoria de 6 caracteres
  return `ORD-${id}-${randomPart}`;
}

export default function Dashboard() {
  const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios
        .get(`${NEXT_PUBLIC_API_URL}/users/orders`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setUserOrders(res.data.reverse());
        })
        .catch((error) => {
          Swal.fire(
            "Error al obtener las órdenes del usuario",
            error.message || "",
            "error"
          );
        })
        .finally(() => {
          setIsLoading(false);
          
        });
    }
  }, [token]);

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="bg-[#ECE7E7] mx-auto p-4 h-[100%] text-gray-900">
      <div className="mx-auto w-full md:w-4/5 lg:w-3/5">
        {/* Sección de perfil del usuario */}
        <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-2">User Profile</h2>
          {user ? (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <div className="animate-pulse mt-2">
              <p className="w-32 h-4 bg-gray-300 rounded mb-2"></p>
              <p className="w-60 h-4 bg-gray-300 rounded"></p>
            </div>
          )}
        </div>

        <hr className="my-4" />

        {/* Sección de órdenes del usuario */}
        <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <OrderSkeleton key={index}/>
              ))}
            </div>
          ) : userOrders.length ? (
            <div className="transition-opacity duration-500">
              {userOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-200 p-4 shadow rounded-lg my-4"
                >
                  <p>
                    <strong>ID:</strong> {generateVisualID(order.id)}
                  </p>
                  <div>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        order.status === "approved"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p>
                    <strong>Date:</strong> {formatDate(order.date)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div>
                You don't have any orders yet.{" "}
                <Link href={Route.HOME} className="text-blue-500 underline">
                  Click here to shop
                </Link>
                .
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}