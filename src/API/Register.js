async function Register(BASE_URL, formData) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      }),
    });

    // Backend will return the created user OR error
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Registration failed:", data);
      return {
        success: false,
        error: data?.message || "Registration failed"
      };
    }

    console.log("Registration successful:", data);

    return {
      success: true,
      user: data
    };

  } catch (error) {
    console.error("Error occurred while registering:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

export default Register;
