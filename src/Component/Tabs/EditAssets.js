import React from 'react'
import EditAssetsTable from '../Table/EditAssetsTable'
import EditAssetsPopup from '../Modal/EditAssetsPopup'

function EditAssets() {
  return (
    <div className='edit_assets'>
      <EditAssetsPopup/>
      <EditAssetsTable/>
    </div>
  )
}

export default EditAssets
