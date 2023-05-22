import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

export const ProtectedModal = ({ toy, isOpen, closeModal }) => {
    const { user, loading } = useContext(AuthContext);

    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip the first render to avoid unnecessary alerts
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (isOpen && !user) {
            alert('You must be logged in to view this modal.');
            closeModal();
            // You can use React Router's history or a state management solution to redirect to the login page
            // Example: history.push('/login');
        }
    }, [isOpen, user, closeModal]);

    if (!isOpen || !user) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>
                    ✕
                </label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
        </div>
    );
};



// for toy card
// const [isOpen, setIsOpen] = useState(false);

// const openModal = (e) => {
//     e.stopPropagation();    
//     setIsOpen(true)
// };
// const closeModal = () => {
//     setIsOpen(false)
// };


// <input type="checkbox" id="my-modal-3" className="modal-toggle" />
// <ProtectedModal toy={toy} isOpen={isOpen} closeModal={closeModal} />


// <label htmlFor="my-modal-3" className="btn w-full rounded-none rounded-b-md bg-[#75A4DA] border-none" onClick={openModal}>View Details</label>