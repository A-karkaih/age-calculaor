import { useState } from "react";

function App() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [dateDiff, setDateDiff] = useState({
    days: "_ _",
    months: "_ _" ,
    years:"_ _"
  });
   const [dateSpcefied, setDateSpcefied] = useState({});
  const [error, setError] = useState(false);

  function validateInput(event, maxValue) {

    const input = event.target;
    let enteredValue = parseInt(input.value, 10);
    // Remove any non-numeric characters
    enteredValue = isNaN(enteredValue) ? 0 : enteredValue;
    input.value = enteredValue;
    // Enforce the maximum value
    if (enteredValue > maxValue) {
      input.value = maxValue;
    }
    setDateSpcefied({
      ...dateSpcefied,
      [event.target.name]: event.target.value,
    });

  }
  const handletime = () => {
   const dateString = `${
     dateSpcefied.years != "0" ? dateSpcefied.years : currentYear
   }-${dateSpcefied.months != "0" ? dateSpcefied.months : "1"}-${
     dateSpcefied.days == "0" ? "1" : dateSpcefied.days
   }`;
    setError(false);
    if (!dateSpcefied.years || !dateSpcefied.months || !dateSpcefied.days) {
      return setError(true);
    }
      
    const specifiedDate = new Date(dateString);

   // Get the current date
   const currentDate = new Date();

   // Calculate the difference in years
   const years = currentDate.getFullYear() - specifiedDate.getFullYear();

   // Calculate the difference in months
   const months = currentDate.getMonth() - specifiedDate.getMonth();

   // Calculate the difference in days
    const days = currentDate.getDate() - specifiedDate.getDate();
    setDateDiff({
      days,
      months,
      years
    });
    console.log(dateDiff);
    console.log(dateSpcefied);
  
  }
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className=" h-[500px] w-[350px] sm:h-[600px] sm:w-[800px] rounded-3xl shadow-md flex flex-col   rounded-br-[30%] bg-white">
        <div className=" sm:gap-10 flex sm:justify-start justify-around mx-auto mt-2 h-[100px] w-[350px] sm:h-[100px] sm:w-[750px]">
          <div className=" w-[80px] sm:w-[150px]  ">
            <h2 className="font-semibold text-gray-500">Day </h2>
            <input
              onInput={(event) => validateInput(event, 31)}
              className="w-full shadow-md h-10 rounded-md border-[1px] px-1 text-xl font-bold border-black"
              placeholder="DD"
              type="number"
              name="days"
              id="days"
              min="1"
              max="31"
            />
            <span className=" mx-auto text-sm text-red-600 ">
              {error ? "pls fill this field" : ""}
            </span>
          </div>

          <div className=" w-[80px] sm:w-[150px]  ">
            <h2 className="font-semibold text-gray-500">Month </h2>
            <input
              onInput={(event) => validateInput(event, 12)}
              className="w-full shadow-md h-10 rounded-md border-[1px] px-1 text-xl font-bold border-black"
              placeholder="MM"
              type="number"
              name="months"
              id="months"
              min="0"
              max="12"
            />
            <span className=" mx-auto text-sm text-red-600 ">
              {error ? "pls fill this field" : ""}
            </span>
          </div>

          <div className=" w-[80px] sm:w-[150px]  ">
            <h2 className="font-semibold text-gray-500">Year </h2>
            <input
              onInput={(event) => validateInput(event, parseInt(currentYear))}
              className="w-full shadow-md h-10 rounded-md border-[1px] px-1 text-xl font-bold border-black"
              placeholder="Year"
              type="number"
              name="years"
              id="years"
              min="1900"
              max={parseInt(currentYear)}
            />
            <span className=" mx-auto text-sm text-red-600 ">
              {error ? "pls fill this field" : ""}
            </span>
          </div>
        </div>

        <div className="mt-16 sm:mt-0 mx-auto shadow-lg h-[2px] w-[350px] bg-blue-400 sm:w-[750px]">
          <div
            onClick={handletime}
            className="w-[80px] rounded-full cursor-pointer  h-[80px] bg-purple-500 relative -top-10 left-[140px] sm:left-[600px]  flex justify-center items-center"
          >
            <img
              className=" w-[60px] h-[60px]"
              src="images/icon-arrow.svg"
              alt="icon-arrow"
            />
          </div>
        </div>

        <div className="mx-auto mt-10  flex items-center gap-6 sm:mx-10 h-[80px] w-[320px] sm:h-[100px] sm:w-[600px] ">
          <p className="sm:text-[80px] text-[50px] font-bold text-purple-700">
            {dateDiff.days}
          </p>
          <p className="sm:text-[80px] text-[60px] font-bold"> days</p>
        </div>
        <div className="mx-auto flex items-center gap-6 sm:mx-10 h-[80px] w-[320px] sm:h-[100px] sm:w-[600px] ">
          <p className="sm:text-[80px] text-[50px] font-bold text-purple-700">
            {dateDiff.months}
          </p>
          <p className="sm:text-[80px] text-[60px] font-bold"> months</p>
        </div>
        <div className="mx-auto flex items-center gap-6 sm:mx-10 h-[80px] w-[320px] sm:h-[100px] sm:w-[600px] ">
          <p className="sm:text-[80px] text-[50px] font-bold text-purple-700">
            {dateDiff.years}
          </p>
          <p className="sm:text-[80px] text-[60px] font-bold"> years</p>
        </div>
      </div>
    </div>
  );
}

export default App;
