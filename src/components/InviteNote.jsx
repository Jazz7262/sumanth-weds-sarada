import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>
                    Srimati M. Sulochana Rani and <br />
                    Sri M. Damodar Krishna
                </h2>

                <h5 className="address mb-3">
                    Residence: Singh Colony,
                    {/* <br /> Opposite Chekuri Lodge,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301. */}
                    <br /> Nandyala.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 96185 60592, <br />
                    +91 98495 02190, <br />
                    +91 98805 74000.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
