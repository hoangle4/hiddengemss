import React, { useState } from 'react';

const AddLocationForm = ({ openModal, closeModal }) => {
  const [gemName, setGemName] = useState();
  const [gemDesc, setGemDesc] = useState();
  const [gemStory, setGemStory] = useState();
  const [gemPhoto, setGemPhoto] = useState({});

  return (
    <div
      className='AddLocationForm_Modal'
      style={{ display: `${openModal ? 'block' : 'none'}` }}
    >
      <div className='container-fluid'>
        <form>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-xs-12 AddLocationForm_Col'>
              <h5>Add Your Gem</h5>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control mb-3'
                  placeholder='Gem name...'
                  value={gemName}
                  onChange={e => setGemName(e.target.value)}
                />
                <input
                  type='text'
                  className='form-control mb-3'
                  placeholder='Gem description...'
                  value={gemDesc}
                  onChange={e => setGemDesc(e.target.value)}
                />
                <textarea
                  type='text'
                  className='form-control mb-3'
                  placeholder='Gem story...'
                  value={gemStory}
                  onChange={e => setGemStory(e.target.value)}
                />

                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                    aria-describedby='inputGroupFileAddon01'
                    value={gemPhoto.webkitRelativePath}
                    onChange={e => setGemPhoto(e.target.files[0])}
                  />
                  <label
                    className='custom-file-label'
                    htmlFor='inputGroupFile01'
                  >
                    {gemPhoto.name || 'Choose photo...'}
                  </label>
                </div>
              </div>
              <div className='form-group text-center'>
                <a
                  href='#!'
                  className='btn btn-medium btn-danger mr-5'
                  onClick={() => closeModal(!openModal)}
                >
                  Close
                </a>
                <button className='btn btn-medium btn-sucess'>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocationForm;
