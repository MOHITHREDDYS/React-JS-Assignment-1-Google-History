import './index.css'

const HistoryItem = props => {
  const {history, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onClickingDeleteIcon = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="app_delete_container">
        <div className="logo_title_container">
          <img src={logoUrl} alt="domain logo" className="app_logo" />
          <div className="title_url_container">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button testid="delete" type="button" onClick={onClickingDeleteIcon}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete_icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
