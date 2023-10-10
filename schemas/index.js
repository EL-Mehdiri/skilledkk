import * as yup from 'yup'

const Schema = yup.object().shape({
    day: yup.number().max(31).positive().integer().required('required'),
    month: yup.number().max(12).positive().integer().required('required'),
    year: yup.number().max(2023).positive().integer().required('required'),
})

export default Schema