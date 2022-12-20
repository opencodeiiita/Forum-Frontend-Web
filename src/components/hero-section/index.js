import image from './forumimage.png';
export default ()=>{
    return (
        <>
        <div className="ellipse"> </div>
        <div className="tag-line-1">Now communicate</div>
        <div className="tag-line-2">with others easily</div>
        <div className="logo">Forum</div>
        <div className="ellipse2"></div>
        <button className="contact">Contact</button>
        <div className="navbar">
            <div className="navitem">Home</div>
            <div className="navitem">Features</div>
            <div className="navitem">About</div>
            <div className="navitem">Support</div>
        </div>
        <div className="tag2">
        Simplified and easy way of communication
        now just one click away
        </div>
        <button className="start">
            start now
        </button>
        <div className="footer">
            <div className="footer-items">
                <div className="title">Share doubts</div>
                <div className="about">
                Discuss your doubts now
                easily and quicky.Doubt
                discussion made easy
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="footer-items">
                <div className="title">
                Share experience 
                </div>
                <div className="about">
                Discuss your doubts now
                easily and quicky.Doubt
                discussion made easy
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="footer-items">
                <div className="title">
                Join communities 
                </div>
                <div className="about">
                Discuss your doubts now
                easily and quicky.Doubt
                discussion made easy
                </div>
            </div>
        </div>
        <img src={image} alt="could not load" className='image-logo'/>
        </>
    );
}