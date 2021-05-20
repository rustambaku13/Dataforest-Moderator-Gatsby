import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { Link as GLink, navigate } from "gatsby";
  import * as React from "react";
  import dataforest from "../images/LogoText.svg";
  import { useForm } from "react-hook-form";
  import github from "../icons/Github.svg";
  import google from "../icons/Google.svg";
  import UserStore from "../store/UserStore";
  import { flowResult } from "mobx";
  import { observer } from "mobx-react-lite";
//   import { useAuthRedirect } from "../../helpers/useAuthOnly";
  const IndexPage = observer(() => {
    const [loading, setLoading] = React.useState(false);
    const { register, formState, handleSubmit, setError } = useForm();
    // useAuthRedirect({ to: "/tasks" });
    const submitHandler = (credentials) => {
      setLoading(true);
      flowResult(UserStore.login(credentials))
        .then((e) => {
          navigate("/moderator")
        })
        .catch((e) => {
          const msg = e.response.data.message || "Error has occured";
          setError("global", msg);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    return (
      <>
        <Center p={3} bg="blueberryBlue.light" minH="100vh" minW="100%">
          <Box mx="auto" maxW="592px" w="100%" as="section">
            <Flex justifyContent='center' w="100%" align="center">
              <GLink to="/">
                <Image src={dataforest} h="48px" />
              </GLink>
            </Flex>
            <Box w="100%" bg="white" my={6} py={10} px={[5, 5, "72px"]}>
              <Heading
                textAlign="center"
                fontSize="700"
                fontWeight="500"
                mb={10}
                color="charlestonGreen.dark"
                as="h1"
              >
                Sign In
              </Heading>
              <VStack
                onSubmit={handleSubmit(submitHandler)}
                spacing={8}
                w="100%"
                as="form"
              >
                <FormControl id="email">
                  <FormLabel variant="">Email</FormLabel>
                  <Input
                    {...register("email", {
                      required: "Enter your email address",
                    })}
                    required
                    size="lg"
                    type="email"
                    placeholder="Email"
                  />
                  {/* <FormLabel>E-mail address</FormLabel> */}
                  <Text fontSize="300" color="danger.base">
                    {formState.errors.email?.message}
                  </Text>
                </FormControl>
                <FormControl id="password">
                  <FormLabel variant="">Password</FormLabel>
                  <Input
                    {...register("password", {
                      required: "Enter your password",
                    })}
                    required
                    placeholder="Password"
                    size="lg"
                    type="password"
                  />
                  {/* <FormLabel>Password</FormLabel> */}
                  <Text fontSize="300" color="danger.base">
                    {formState.errors.password?.message}
                  </Text>
                  <Text fontSize="300" color="danger.base">
                    {formState.errors.global?.message}
                  </Text>
                </FormControl>
  
                <VStack mb={8} w="100%" spacing={4}>
                  <Button
                    isLoading={loading}
                    type="submit"
                    fontWeight="500"
                    size="lg"
                    w="100%"
                    variant="primaryBlueBerryBlueDark"
                  >
                    Sign in to Dataforest
                  </Button>
                  <Button
                    leftIcon={<Image mr={4} src={google} />}
                    type="button"
                    isLoading={loading}
                    size="lg"
                    w="100%"
                    variant="outline"
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    leftIcon={<Image mr={4} src={github} />}
                    type="button"
                    isLoading={loading}
                    size="lg"
                    w="100%"
                    variant="black"
                  >
                    Sign in with GitHub
                  </Button>
                </VStack>
              </VStack>
            </Box>
            <Text
              fontWeight="500"
              color="blueberryBlue.base"
              fontSize="500"
              w="100%"
              textAlign="center"
            >
              <GLink to="/password">
                <Link as="span">Forgot your password?</Link>
              </GLink>
            </Text>
          </Box>
        </Center>
      </>
    );
  });
  
  export default IndexPage;
  