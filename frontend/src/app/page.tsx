"use client";
import styles from "./page.module.css";
import Button from "../components/Button/Button";
import TextField from "../components/TextField/TextField";
import Select from "../components/Select/Select";
import Text from "../components/Text/Text";
import Stepper from "../components/Stepper/Stepper";

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
  <Text color="error" children="hi nigiri" />
<Stepper activeStep={0} steps={["1", "2", "3"]}/>
    </main>
  );
}
