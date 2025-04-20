export default function ErrorPage() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-2">Something went wrong.</p>
        <p className="text-gray-500">The page you're looking for doesn't exist or an unexpected error occurred.</p>
        <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Go Home
        </a>
      </div>
    );
  }
  