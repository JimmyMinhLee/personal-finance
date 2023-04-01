import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import SocialProfileSimple from "./SocialProfileSimple";
import React from "react";
import { useState } from "react";
import CreditCardCard from "./CreditCardCard";
const Main = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [cardMoneyArray, setCardMoneyArray] = useState([0, 0, 0, 0, 0]);
  const appendToTotalMoney = (newValue: number, cardIndex: number) => {
    const currentMoneyArray = cardMoneyArray;
    currentMoneyArray[cardIndex] = newValue;
    setTotalMoney(cardMoneyArray.reduce((a, b) => a + b, 0));
  };
  return (
    <VStack>
      <Flex maxWidth={"6xl"}>
        <CreditCardCard
          cardName={"Platinum"}
          balanceSetter={appendToTotalMoney}
          cardIndex={0}
        />

        <CreditCardCard
          cardName={"Gold"}
          balanceSetter={appendToTotalMoney}
          cardIndex={1}
        />
        <CreditCardCard
          cardName={"Blue"}
          balanceSetter={appendToTotalMoney}
          cardIndex={2}
        />
      </Flex>
      <Flex maxWidth={"6xl"}>
        <CreditCardCard
          cardName={"Apple"}
          balanceSetter={appendToTotalMoney}
          cardIndex={3}
        />
        <CreditCardCard
          cardName={"Discover"}
          balanceSetter={appendToTotalMoney}
          cardIndex={4}
        />
      </Flex>
      <HStack alignContent={"center"}>
        <Heading> Total Balance:</Heading>
        <Text> {totalMoney} </Text>
      </HStack>
    </VStack>
  );
};

export default Main;
