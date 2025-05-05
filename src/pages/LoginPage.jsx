import { useState } from "react";

const LoginPage = () => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register attempt with:", { name, email, password });
  };

  return (
    <div className="container flex items-center justify-center px-4 py-16 mx-auto flex-1">
      <div className="w-full max-w-md">
        {/* Tabs */}
        <div className="grid grid-cols-2 mb-6 border border-primary rounded-md overflow-hidden">
          <button
            onClick={() => setTab("login")}
            className={`py-2 font-medium cursor-pointer ${
              tab === "login" ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-100 transition`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            className={`py-2 font-medium cursor-pointer ${
              tab === "register" ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-100 transition`}
          >
            Register
          </button>
        </div>

        {/* Card */}
        <div className="border rounded-lg shadow-sm">
          <div className="p-6 border-b border-primary">
            <h2 className="text-xl font-semibold">
              {tab === "login" ? "Login" : "Register"}
            </h2>
            <p className="text-sm text-gray-600">
              {tab === "login"
                ? "Enter your email and password to access your account"
                : "Create a new account to start renting books"}
            </p>
          </div>

          <div className="p-6">
            {tab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="register-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
