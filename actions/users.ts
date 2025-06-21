"use server";

import { RegisterFormValues } from "@/components/auth/signup";
import { auth } from "@/lib/auth";

export async function registerUser(data: RegisterFormValues) {
  try{
    console.log(data);

    //call the API endpoint to register the user
    await auth.api.signUpEmail({
      body: {
        email: "john@doe.com",
        password: "password",
        name: "John Doe",
      },
    });

    return{
      success: true,
      data: data,
      error: null
    }

  }catch(error) {
    console.log(error);
    return{
      success: false,
      data: null,
      error: "Something went wrong. Please try again."
    }
  }
}
