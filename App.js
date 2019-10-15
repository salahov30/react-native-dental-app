import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SectionList, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { SectionTitle, Appointment } from "./components";

const DATA = [
  {
    title: "15 октября",
    data: [
      {
        time: "15:30",
        diagnosis: "Пульпит",
        status: true,
        user: {
          fullname: "Александра Воронина",
          avatar:
            "https://sun3-10.userapi.com/c854220/v854220601/1186ce/mSvh9o4CUKo.jpg?ava=1"
        }
      },
      {
        time: "16:10",
        diagnosis: "Удаление зуба",
        user: {
          fullname: "Виктория Костина",
          avatar:
            "https://sun3-11.userapi.com/c850336/v850336606/1d72c9/E-cePIR43_U.jpg?ava=1"
        }
      },
      {
        time: "18:10",
        diagnosis: "Плановый осмотр",
        user: {
          fullname: "Валерия Гребнева",
          avatar:
            "https://sun9-69.userapi.com/c840231/v840231448/803e4/Ji46kraBbYw.jpg?ava=1"
        }
      }
    ]
  },
  {
    title: "16 октября",
    data: [
      {
        time: "11:30",
        diagnosis: "Плановый прием",
        user: {
          fullname: "Олия Шевченко",
          avatar:
            "https://sun9-23.userapi.com/c857432/v857432393/8fa24/dN627xrxp4c.jpg?ava=1"
        }
      },
      {
        time: "12:10",
        diagnosis: "Периодонт",
        user: {
          fullname: "Леся",
          avatar:
            "https://sun9-7.userapi.com/c851132/v851132365/e49be/Lkjnt_tp_b8.jpg?ava=1"
        }
      },
      {
        time: "16:10",
        diagnosis: "Плановый осмотр",
        user: {
          fullname: "Рина Комарова",
          avatar:
            "https://sun9-17.userapi.com/c846523/v846523863/171408/2i0l29vlqiE.jpg?ava=1"
        }
      }
    ]
  },
  {
    title: "17 октября",
    data: [
      {
        time: "11:30",
        diagnosis: "Плановый прием",
        user: {
          fullname: "Даниил Елистратов",
          avatar:
            "https://sun9-65.userapi.com/c850532/v850532318/100d2/3z6UZFivtdY.jpg?ava=1"
        }
      },
      {
        time: "12:10",
        diagnosis: "Периодонт",
        user: {
          fullname: "Оля Девдериани",
          avatar:
            "https://sun9-2.userapi.com/c851532/v851532578/1d97f0/bhEo4L9d_3c.jpg?ava=1"
        }
      },
      {
        time: "16:10",
        diagnosis: "Плановый осмотр",
        user: {
          fullname: "Константин Галушко",
          avatar:
            "https://sun3-12.userapi.com/c636528/v636528456/14d5/D4KdFXQA8V4.jpg?ava=1"
        }
      }
    ]
  }
];

export default App = () => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <AddPatientButton>
        <Ionicons name="ios-add" size={32} color="#fff" />
      </AddPatientButton>
    </Container>
  );
};

const AddPatientButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background: #2a86ff;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 25px;
`;
