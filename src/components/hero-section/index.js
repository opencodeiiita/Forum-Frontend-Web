import image from './forumimage.png';
export default function Hero(){
    return (
        <>
        <div className="ellipse"> </div>
        <div className="tag-line-1">Now communicate</div>
        <div className="tag-line-2">with others easily</div>
       
        <div className="ellipse2"></div>
        
        
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