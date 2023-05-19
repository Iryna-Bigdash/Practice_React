import {ProgressData} from './Progress.styled'
export const Progress = ({ currentPage, totalPages }) => {
return <ProgressData>{ currentPage }/{ totalPages }</ProgressData>
}