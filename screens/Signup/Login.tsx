import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TextInput } from "react-native";
import { ParamsList } from "../../routes/SignUpRouter";
import { SignUpLayout } from "./Layout";
import { SignUpStyles } from "../../styles/SignUp/signUp";
import { Button } from "../../components/Button";
import { login, UserData } from "../../api/users/usersClient";
import { Formik } from "formik";
import { setErrorMap, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormikInput } from "../../components/FormikInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const validationSchema = z.object({
  userName: z.string(),
  password: z.string(),
});

type Values = z.infer<typeof validationSchema>;

const initialValues: Values = {
  userName: "",
  password: "",
};

export const Login = ({
  navigation,
}: NativeStackScreenProps<ParamsList, "login">) => {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (values: UserData) => {
    try {
      const token = await login(values);
      await AsyncStorage.setItem("authToken", token);
    } catch (error) {
      setError("user either doesnt exist or credentials arent right");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
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
              <Text style={SignUpStyles.title}>Login</Text>
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
                value={values.password}
                error={errors.password}
                touched={touched.password}
                name="password"
                label="Password"
                type="password"
              />
              <Button onPress={() => handleSubmit()} style={SignUpStyles.btn}>
                <Text style={SignUpStyles.btnText}>LOGIN</Text>
              </Button>
              <Button onPress={() => navigation.navigate("sign_in")}>
                <Text style={SignUpStyles.link}>Sign In</Text>
              </Button>
              {error && <Text style={SignUpStyles.error}>{error}</Text>}
            </View>
          )}
        </Formik>
      </View>
    </SignUpLayout>
  );
};
