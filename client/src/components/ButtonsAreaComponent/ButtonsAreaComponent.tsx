import { Button } from "react-bootstrap";
import { createNewEntry, getUsersWorkingStatus } from "../../lib/api";
import { useEffect, useState } from "react";

export const ButtonsAreaComponent = () => {
  const [workStatus, setWorkStatus] = useState<boolean>(false);

  useEffect(() => {
    const getWorkingStatus = async () => {
      const { workingStatus } = await getUsersWorkingStatus(
        "63ee134b3258e500a49e677d"
      );

      setWorkStatus(workingStatus);
    };

    getWorkingStatus();
  }, []);

  console.log(workStatus);

  const clickEventsHandler = async (
    buttonName: "createNewEntry" | "break" | "goodByeForToday"
  ) => {
    if (buttonName === "createNewEntry") {
      await createNewEntry({
        companyId: "12345",
        userId: "63ee134b3258e500a49e677d",
      });
    }
  };

  return (
    <>
      {!workStatus && (
        <Button
          className="m-2"
          variant="success"
          onClick={() => clickEventsHandler("createNewEntry")}
        >
          כניסה למשמרת
        </Button>
      )}

      {workStatus && (
        <Button className="m-2" variant="danger">
          סיום משמרת
        </Button>
      )}
    </>
  );
};
