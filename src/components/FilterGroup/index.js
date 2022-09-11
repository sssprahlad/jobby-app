import {BsSearch} from 'react-icons/bs'
import ProfileItemDetails from '../ProfileItemDetails'

import './index.css'

const FilterGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          value={searchInput}
        />
        <button
          type="button"
          testid="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    // console.log(employmentTypesList)

    return (
      <div className="employee-type-container">
        <h1 className="employee-type-heading">Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props

            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderTypeOfSalary = () => {
    const {salaryRangesList} = props

    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  className="check-input"
                  name="salary"
                  id={eachSalary.salaryRangeId}
                  value={eachSalary.salaryRangeId}
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      <ProfileItemDetails />
      <hr className="horizontal line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal line" />
      {renderTypeOfSalary()}
    </div>
  )
}
export default FilterGroup
