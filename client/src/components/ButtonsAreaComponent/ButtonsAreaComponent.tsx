import { Button } from "react-bootstrap";
import { createNewEntry } from "../../lib/api";

export const ButtonsAreaComponent = () => {
  const clickEventsHandler = async (
    buttonName: "createNewEntry" | "break" | "goodByeForToday"
  ) => {
    if (buttonName === "createNewEntry") {
      await createNewEntry({ companyId: "1234", usrId: "9876" });
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
