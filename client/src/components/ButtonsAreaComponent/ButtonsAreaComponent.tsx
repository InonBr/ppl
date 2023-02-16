import { Button } from "react-bootstrap";
import { createNewEntry } from "../../lib/api";
import { useEffect, useState } from "react";

export const ButtonsAreaComponent = () => {
  const [workStatus, setWorkStatus] = useState<boolean>(false);

  useEffect(() => {}, []);

  const clickEventsHandler = async (
    buttonName: "createNewEntry" | "break" | "goodByeForToday"
  ) => {
    if (buttonName === "createNewEntry") {
      await createNewEntry({
        companyId: "12345",
        usrId: "63ee134b3258e500a49e677d",
      });
    }
  };

  return (
    <>
      <Button
        className="m-2"
        variant="success"
        onClick={() => clickEventsHandler("createNewEntry")}
      >
        כניסה למשמרת
      </Button>
    </>
  );
};
