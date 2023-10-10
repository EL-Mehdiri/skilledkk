'use client'
import { useState } from "react"
import Image from "next/image"
import Schema from "@/schemas"

import { useFormik } from "formik"


const Our = () => {


    const [age, setAge] = useState({
        years: '--',
        months: '--',
        days: '--'
    });


    const onSubmit = () => {
        console.log('submitted!!')


        const dayInt = parseInt(values.day);
        const monthInt = parseInt(values.month);
        const yearInt = parseInt(values.year);

        if (
            isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt) || dayInt < 1 || dayInt > 31 || monthInt < 1 || monthInt > 12 || yearInt < 1900
        ) {
            setError('');
            return;
        }

        const currentDate = new Date();

        const birthDate = new Date(values.year, values.month - 1, values.day);

        const difference = currentDate - birthDate;

        const ageInYears = difference / (1000 * 60 * 60 * 24 * 365.25);
        const years = Math.floor(ageInYears);
        const months = Math.floor((ageInYears - years) * 12);
        const days = Math.floor((ageInYears - years - (months / 12)) * 365.25);

        setAge({ years, months, days });


    };
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            day: "",
            month: '',
            year: '',
        },
        validationSchema: Schema,
        onSubmit,


    })
    console.log(errors)

    return (
        <div className="p-10 rounded-br-[300px] bg-[#fff]">
            <form className=" " onSubmit={handleSubmit} >
                <div className="flex justify-between gap-10">
                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${errors.day && ' text-[#ff2d2d]'}`}>Day</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${errors.day && 'border-[#ff2d2d]'}`} placeholder={'DD'} type="number"
                                name="day"
                                value={values.day}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.day && <p className=" text-[#ff2d2d]">Must be a valid day</p>}
                    </div>


                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${errors.month && ' text-[#ff2d2d]'}`}>MONTH</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${errors.month && 'border-[#ff2d2d]'}`} placeholder="MM" type="number"
                                name="month"
                                value={values.month}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.month && <p className=" text-[#ff2d2d]">
                            Must be a valid month
                        </p>}
                    </div>

                    <div>
                        <div className="flex flex-col gap-2">
                            <label className={`${errors.year && ' text-[#ff2d2d]'}`}>Year</label>
                            <input className={`border border-[#DCDCDC] px-4 py-2 ${errors.year && 'border-[#ff2d2d]'}`} placeholder="YYYY" type="number"
                                name="year"
                                value={values.year}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.year && <p className=" text-[#ff2d2d]">Must be in the past</p>}
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