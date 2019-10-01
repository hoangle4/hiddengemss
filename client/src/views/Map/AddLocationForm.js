import React, { useRef, useEffect } from 'react';

const AddLocationForm = ({ openModal, closeModal }) => {
	const Modal = useRef(null);

	useEffect(
		() => {
			openModal ? (Modal.current.style.display = 'block') : (Modal.current.style.display = 'none');
		},
		[ openModal ]
	);

	return (
		<div className='AddLocationForm_Modal' ref={Modal}>
			<div className='container-fluid'>
				<form>
					<div className='row justify-content-center'>
						<div className='col-md-6 col-xs-12 AddLocationForm_Col'>
							<h5>Add Your Gem</h5>
							<div className='form-group'>
								<input type='text' className='form-control mb-3' placeholder='Gem name...' />
								<input type='text' className='form-control mb-3' placeholder='Gem description...' />
								<input type='text' className='form-control mb-3' placeholder='Gem story...' />
							</div>
							<div className='form-group text-center'>
								<a className='btn btn-medium btn-danger mr-5' onClick={() => closeModal(!openModal)}>
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
