import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Appointment = ({ user, diagnosis, status, time }) => {
  return (
    <AppointmentItemContainer>
      <AppointmentItem>
        <Avatar
          source={{
            uri: user.avatar
          }}
        />
        <View>
          <FullNmae>{user.fullname}</FullNmae>
          <Description>{diagnosis}</Description>
        </View>
      </AppointmentItem>
      <TimeReceiptContainer status={status}>
        <TimeReceipt status={status}>{time}</TimeReceipt>
      </TimeReceiptContainer>
    </AppointmentItemContainer>
  );
};

Appointment.defaultProps = {
  title: "Untitle",
  items: []
};

const TimeReceipt = styled.Text`
  color: ${props => (props.status ? "#FFFF" : "#4294FF")};
  font-weight: 600;
  font-size: 14px;
`;
const TimeReceiptContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px 20px;
  border-radius: 18px;
  margin-left: 20px;
  background: ${props => (props.status ? "#2A86FF" : "#e9f5ff")};
`;

const Description = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const FullNmae = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
const AppointmentItem = styled.View`
  flex-direction: row;
`;
const AppointmentItemContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
