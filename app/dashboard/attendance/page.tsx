import GradeSelection from "@/app/_components/GradeSelection";
import MonthSelection from "../../_components/MonthSelection";

function Attendance() {
  return (
    <div className="p-7">
      <div className="text-2xl font-bold">Attendance</div>
     

      <div className="">
        <MonthSelection/>
        <GradeSelection/>
      </div>
    
    </div>
  );
}

export default Attendance;
