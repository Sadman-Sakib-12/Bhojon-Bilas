export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Food Delivery</h1>
            <p className="py-6">
              Order delicious food from your favorite restaurants and get it delivered to your doorstep.
            </p>
            <a href="/restaurants" className="btn btn-primary">
              Browse Restaurants
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
