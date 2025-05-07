// app/components/Nav/login.tsx
import { useState } from "react";
import "./nav.css";
import {Login} from "@components/Login/login";

export function Nav() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="logo">ForumMap</div>
                <div className="nav-links">
                    <button onClick={() => setShowModal(true)}>Login / Register</button>
                </div>
            </nav>
            {showModal && (
                <div className="modal-backdrop" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <Login />
                        <br/>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}
