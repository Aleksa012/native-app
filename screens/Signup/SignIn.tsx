import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Button } from "../../components/Button";
import { ParamsList } from "../../routes/SignUpRouter";
import { SignUpLayout } from "./Layout";
import { SignUpStyles } from "../../styles/signUp/signUp";
import { Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormikInput } from "../../components/FormikInput";
import { postUser, UserData } from "../../api/users/usersClient";

const validationSchema = z
  .object({
    userName: z
      .string()
      .min(5, "Username must be minimum 5 chars long")
      .max(10, "Username can be no longer than 10 chars"),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      ),
    passwordConfirmation: z.string(),
  })
  .refine((o) => o.password === o.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

type Values = z.infer<typeof validationSchema>;

const initialValues: Values = {
  userName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const SignIn = ({
  navigation,
}: NativeStackScreenProps<ParamsList, "sign_in">) => {
  const handleSubmit = async (values: UserData) => {
    await postUser(values);
  };

  return (
    <SignUpLayout>
      <View style={SignUpStyles.container}>
        <Formik
          validationSchema={toFormikValidationSchema(validationSchema)}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <View style={SignUpStyles.form}>
              <Text style={SignUpStyles.title}>Sign Up</Text>
              <FormikInput
                handleChange={handleChange}
                value={values.userName}
                error={errors.userName}
                touched={touched.userName}
                name="userName"
                label="Username"
              />
              <FormikInput
                handleChange={handleChange}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                name="email"
                label="Email"
              />
              <FormikInput
                handleChange={handleChange}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                name="password"
                label="Password"
                type="password"
              />
              <FormikInput
                handleChange={handleChange}
                value={values.passwordConfirmation}
                error={errors.passwordConfirmation}
                touched={touched.passwordConfirmation}
                name="passwordConfirmation"
                label="Confirm Password"
                type="password"
              />
              <Button onPress={() => handleSubmit()} style={SignUpStyles.btn}>
                <Text style={SignUpStyles.btnText}>SIGN UP</Text>
              </Button>
              <Text>Already got an account?</Text>
              <Button onPress={() => navigation.navigate("login")}>
                <Text style={SignUpStyles.link}>Login</Text>
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </SignUpLayout>
  );
};
