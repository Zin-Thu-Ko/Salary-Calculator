function calculateSalary(){

  // Basic Data
  let dailyWage =
    Number(document.getElementById("dailyWage"). value);
  let workingDays =
    Number(document.getElementById("workingDays").value);

  let dayShift =
    Number(document.getElementById("dayShift").value);

  let nightShift =
    Number(document.getElementById("nightShift").value);
    
  // OT Inputs
  let phOT =
    Number(document.getElementById("phOT").value);

  let phExtraOT =
    Number(document.getElementById("phExtraOT").value);

  let offOT =
    Number(document.getElementById("offOT").value);

  let offExtraOT =
    Number(document.getElementById("offExtraOT").value);

  let normalOT =
    Number(document.getElementById("normalOT").value);

  // Absent
  let absent1 =
    Number(document.getElementById("absent1").value);

  let absent2 =
    Number(document.getElementById("absent2").value);

  // Bonus
  let kpi =
    Number(document.getElementById("kpi").value);

  let otherBonus =
    Number(document.getElementById("otherBonus").value);

  let eBill =
    Number(document.getElementById("eBill").value);



  // ======================
  // BASIC SALARY
  // ======================

  let basicSalary = workingDays * dailyWage;

  // ======================
  // OT CALCULATION
  // ======================

  let hourlyRate = dailyWage / 8;

  // Public Holiday
  let publicHolidayPay =
    (phOT * hourlyRate * 1) +
    (phExtraOT * hourlyRate * 3);

  // Off Day
  let offDayPay =
    (offOT * hourlyRate * 2) +
    (offExtraOT * hourlyRate * 3);

  // Normal OT
  let normalOTPay =
    normalOT * hourlyRate * 1.5;

let dayshiftBonus = dayShift * 14;

  let nightshiftBonus = nightShift * 150;

  // ======================
  // ATTENDANCE BONUS
  // ======================

  let attendanceBonus = 1000;

  if(absent1 > 0){
    attendanceBonus -= 500;
  }

  if(absent2 > 0){
    attendanceBonus -= 500;
  }



  // ======================
  // TAX
  // ======================

  let tax = basicSalary * 0.05;



  // ======================
  // TOTAL SALARY
  // ======================

  let totalSalary =
    basicSalary +
    publicHolidayPay +
    offDayPay +
    normalOTPay +
    dayshiftBonus +
    nightshiftBonus+
    attendanceBonus +
    kpi +
    otherBonus -
    (tax +
    eBill);



  // ======================
  // SHOW RESULT
  // ======================

  document.getElementById("result").innerHTML = `
  
    <h2>Salary Result</h2>

    <p>Basic Salary: ${basicSalary.toFixed(2)} Baht</p>

    <p>Public Holiday OT: ${publicHolidayPay.toFixed(2)} Baht</p>

    <p>Off Day OT: ${offDayPay.toFixed(2)} Baht</p>

    <p>Normal OT: ${normalOTPay.toFixed(2)} Baht</p>

    <p>Day Shift Bonus: ${dayshiftBonus.toFixed(2)} Baht</p>

    <p>Night Shift Bonus: ${nightshiftBonus.toFixed(2)}Baht</p>
    
    <p>Attendance Bonus: ${attendanceBonus.toFixed(2)} Baht</p>

    <p>KPI Bonus: ${kpi.toFixed(2)} Baht</p>

    <p>Other Bonus: ${otherBonus.toFixed(2)} Baht</p>

    <p>Tax: -${tax.toFixed(2)} Baht</p>

    <p>Electricity Bill: -${eBill.toFixed(2)} Baht</p>
    
    <h2>Total Salary:
      ${totalSalary.toFixed(2)} Baht
    </h2>

  `;
}
