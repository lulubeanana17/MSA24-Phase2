"use client";
import styles from "./page.module.css";
import Button from "../components/Button/Button";
import TextField from "../components/TextField/TextField";
import Select from "../components/Select/Select";
import Text from "../components/Text/Text";
import Stepper from "../components/Stepper/Stepper";
import RequestCell from "../components/RequestCell/RequestCell";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        fontColor="#FFFFFF"
        backgroundColor="#FF5B6F"
        fontColorHover="#FFFFFF"
        backgroundColorHover="#E04860"
        label="hi"
      />
      <TextField />
      <Select options={[]} />
      <Text className="nigiri" color="error" children="hi nigiri" />
      <Stepper activeStep={0} steps={["1", "2", "3"]} />
      <RequestCell
        borderColor="primary"
        width="18rem"
        height="18rem"
        title="Amenity delivery"
        location="Room 0402"
        detail="2 x toilet paper"
        urgency="within 20mins"
        department="housekeeing"
        startTime="15:39pm"
      />
    </main>
  );
}
