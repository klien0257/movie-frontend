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
        password: formData.password,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: "Registration successful! Please sign in.",
      user: data,
    };

  } catch (error) {
    return {
      success: false,
      message: "Network error — could not register",
    };
  }
}

export default Register;
