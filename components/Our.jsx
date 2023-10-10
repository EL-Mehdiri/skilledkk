'use client'
import { useState } from "react"
import Image from "next/image"


const Our = () => {
    const [day, setday] = useState(0)
    const [month, setmonth] = useState(0)
    const [year, setyear] = useState(0)
    const [age, setAge] = useState({
        years: '--',
        months: '--',
        days: '--'
    });
    const [error, setError] = useState('');
    // console.log(day)

    const handlesubmit = (e) => {
        e.preventDefault();
        calculateAge()

        console.log(age)


    }

    const calculateAge = () => {
        if (!day || !month || !year) {
            setError('Please enter a valid date of birth.');
            return;
        }

        const dayInt = parseInt(day);
        const monthInt = parseInt(month);
        const yearInt = parseInt(year);

        if (
            isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt) || dayInt < 1 || dayInt > 31 || monthInt < 1 || monthInt > 12 || yearInt < 1900
        ) {
            setError('');
            return;
        }

        const currentDate = new Date();

        const birthDate = new Date(year, month - 1, day);

        const difference = currentDate - birthDate;

        const ageInYears = difference / (1000 * 60 * 60 * 24 * 365.25);
        const years = Math.floor(ageInYears);
        const months = Math.floor((ageInYears - years) * 12);
        const days = Math.floor((ageInYears - years - (months / 12)) * 365.25);

        setAge({ years, months, days });
    };


    return (
        <div className="p-10 rounded-br-[300px] bg-[#fff]">
            <form className=" " onSubmit={handlesubmit} >
                <div className="flex justify-between gap-10">
                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${error && ' text-[#ff2d2d]'}`}>Day</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${error && 'border-[#ff2d2d]'}`} placeholder={'DD'} type="number"
                                name="day"
                                onChange={(e) => setday(e.target.value)} />
                        </div>
                        {error && <p className=" text-[#ff2d2d]">Must be a valid day</p>}
                    </div>


                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${error && ' text-[#ff2d2d]'}`}>MONTH</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${error && 'border-[#ff2d2d]'}`} placeholder="MM" type="number"
                                name="month"
                                onChange={(e) => setmonth(e.target.value)} />
                        </div>
                        {error && <p className=" text-[#ff2d2d]">
                            Must be a valid month
                        </p>}
                    </div>

                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${error && ' text-[#ff2d2d]'}`}>Year</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${error && 'border-[#ff2d2d]'}`} placeholder="YYYY" type="number"
                                name="year"
                                onChange={(e) => setyear(e.target.value)} />
                        </div>
                        {error && <p className=" text-[#ff2d2d]">Must be in the past</p>}
                    </div>

                </div>

                <div className="flex items-center">
                    <div className="border flex-1 h-[1px] border-[#DCDCDC]" />
                    <button type="submit">
                        <Image src='/Frame 30.png' height={96} width={96} />
                    </button>

                </div>
            </form>
            <div>
                <h1 className="text-[#151515] font-[880] text-[104px]"><span className="text-[#854DFF] ">
                    {age.years}
                </span> years</h1>
                <h1 className="text-[#151515] font-[880] text-[104px]"><span className="text-[#854DFF] ">
                    {age.months}
                </span> months</h1>
                <h1 className="text-[#151515] font-[880] text-[104px]"><span className="text-[#854DFF] ">
                    {age.days}
                </span> days</h1>

            </div>
        </div>
    )
}
export default Our