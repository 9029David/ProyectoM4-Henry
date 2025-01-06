import { Route } from "@/app/shared/constants/routes";

export default function NotFound({title}: {title?: string}) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
          <p className="text-gray-700 mt-4">
              {!title ?" Oops! The page you are looking for doesn’t exist." : title}
          </p>
          <a
              href={Route.HOME}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
              Go back to Home
          </a>
      </div>
    );
}