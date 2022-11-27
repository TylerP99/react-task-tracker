const API_BASE = "/api/users/"

// Register user
const register = async (user) => {
    const API_EXTENSION = "register";

    const response = await fetch(
        API_BASE + API_EXTENSION,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }
    );

    const data = await response.json();

    console.log(data);

    return data;
};

// Login user
const login = async () => {};

// Logout user
const logout = async () => {};

const authService = {
    register,
    login,
    logout,
};

export default authService;